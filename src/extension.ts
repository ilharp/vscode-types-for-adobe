import * as vscode from 'vscode'
import { setUp } from './setup'

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand('vscode-types-for-adobe.set-up', setUp)
  )
}
