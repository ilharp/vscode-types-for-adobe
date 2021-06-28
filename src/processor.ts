import { defaultTypesDir } from './typesResolver'

export function processConfig(
  /* eslint-disable-next-line */
  _name: string,
  content: string,
  productDir: string
): string | undefined {
  const config = JSON.parse(content)

  // In theory, using 'files' and 'include' at the same time will cause VSC reporting errors.
  // But in fact, the new version of VSC will properly handle this. Just leave this.
  //
  // if ('files' in config) {
  //   vscode.window.showErrorMessage(
  //     `Found "files" field in ${name}. You must change "files" to "include" to use Types for Adobe.`
  //   )
  //   return undefined
  // }

  let typesDir: string = defaultTypesDir.replace(/\\/g, '/')
  if (typesDir.endsWith('/')) typesDir = typesDir.substr(0, typesDir.length - 1)
  if (!('include' in config)) config.include = ['./**/*']

  // Clean old config
  config.include = config.include.filter((x: string[]) => !x.includes(typesDir))

  // Push Types Dir
  config.include.push(`${typesDir}/${productDir}/**/*`)
  config.include.push(`${typesDir}/shared/**/*`)

  return JSON.stringify(config)
}
