import path = require('path')

export const defaultTypesDir = path.resolve(
  __dirname,
  '../node_modules/types-for-adobe'
)

export function getProductPath(productId: string): string {
  return `${defaultTypesDir}/${productId}`
}
