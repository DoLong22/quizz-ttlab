import { resolve, join } from 'path'
import { readdirSync, existsSync } from 'fs'

const dirPath = resolve(__dirname, '../modules')

export const getRoutes = async () => {
  try {
    const routes: any = []
    const folders = readdirSync(dirPath)

    for (let index = 0; index < folders.length; index++) {
      const dirName = folders[index]
      const filePath = join(dirPath, dirName, 'route.ts')
      if (existsSync(filePath)) {
        const _routes = await import(filePath)
        routes.push(..._routes.default)
      }
    }
    return routes
  } catch (error) {
    return []
  }
}
