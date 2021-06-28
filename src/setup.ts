import * as fs from 'fs'
import * as vscode from 'vscode'
import { processConfig } from './processor'
import { AdobeProduct, AdobeProductVersion, products } from './productInfo'
import { getProductPath } from './typesResolver'

export async function setUp(): Promise<void> {
  pickProgram()
}

function pickProgram(): void {
  // Create QuickPick
  const quickPick = vscode.window.createQuickPick()
  quickPick.placeholder = 'Select Adobe Product'
  quickPick.items = products.map((x) => ({
    label: x.name,
  }))
  quickPick.onDidChangeSelection(async (selection) => {
    quickPick.hide()
    if (selection[0]) {
      await pickVersion(selection[0].label)
    }
  })
  quickPick.onDidHide(() => quickPick.dispose())
  quickPick.show()
}

async function pickVersion(productName: string): Promise<void> {
  const product: AdobeProduct = products.filter(
    (x) => x.name === productName
  )[0]

  // Get available API versions
  const availableVersions = await fs.promises.readdir(
    getProductPath(product.id)
  )
  const versions: AdobeProductVersion[] = product.versions.filter((x) =>
    availableVersions.includes(x.id)
  )

  // Create QuickPick
  const quickPick = vscode.window.createQuickPick()
  quickPick.placeholder = `Select API Version for ${product.name}`
  quickPick.items = Object.values(versions).map((x) => ({
    label: x.name,
    description: x.id,
  }))
  quickPick.onDidChangeSelection(async (selection) => {
    quickPick.hide()
    if (selection[0]) {
      if (selection[0].description !== undefined)
        await setConfig(product.id, selection[0].description)
    }
  })
  quickPick.onDidHide(() => quickPick.dispose())
  quickPick.show()
}

async function setConfig(
  productId: string,
  productVersion: string
): Promise<void> {
  const productDir = `${productId}/${productVersion}`

  // Check if workspace supports writing files
  if (!vscode.workspace.fs.isWritableFileSystem('file')) {
    vscode.window.showErrorMessage(
      'The current workspace does not support writing configs.'
    )
    return
  }

  if (vscode.workspace.workspaceFolders === undefined) {
    vscode.window.showErrorMessage(
      'Types for Adobe requires an open folder to write configs.'
    )
    return
  }

  for (const folder of vscode.workspace.workspaceFolders) {
    const jsConfigName = 'jsconfig.json'
    const tsConfigName = 'tsconfig.json'
    const jsConfigUri = vscode.Uri.joinPath(folder.uri, jsConfigName)
    const tsConfigUri = vscode.Uri.joinPath(folder.uri, tsConfigName)
    let jsConfig: string | undefined, tsConfig: string | undefined

    try {
      jsConfig = Buffer.from(
        await vscode.workspace.fs.readFile(jsConfigUri)
      ).toString()
    } catch (err) {
      // Ignore
    }

    try {
      tsConfig = Buffer.from(
        await vscode.workspace.fs.readFile(tsConfigUri)
      ).toString()
    } catch (err) {
      // Ignore
    }

    // If no config provided, create jsconfig.json
    if (jsConfig === undefined && tsConfig === undefined) jsConfig = '{}'

    // Process config
    if (jsConfig !== undefined) {
      const result = processConfig(jsConfigName, jsConfig, productDir)
      if (result !== undefined)
        await vscode.workspace.fs.writeFile(
          jsConfigUri,
          new Uint8Array(Buffer.from(result))
        )
    }
    if (tsConfig !== undefined) {
      const result = processConfig(tsConfigName, tsConfig, productDir)
      if (result !== undefined)
        await vscode.workspace.fs.writeFile(
          tsConfigUri,
          new Uint8Array(Buffer.from(result))
        )
    }
  }
}
