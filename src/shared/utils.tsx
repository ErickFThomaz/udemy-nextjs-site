import  fs from 'fs'
import path from 'path'
import {resolve} from 'path'

export function getPostList() {
    try {
        const postDir = path.join(process.cwd(), 'src/pages/posts')

        const files = fs.readdirSync(postDir);
        const result: string[] = [];

         fs.readdirSync(postDir).map(filename => {
            result.push(filename.substring(0, filename.indexOf('.')))
        })
        return result
    } catch (e){
        console.warn(e)
        return []
    }
}