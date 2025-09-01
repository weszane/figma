import fs from 'node:fs'
import path from 'node:path'

function rename(input) {
  fs.readdirSync(input).forEach((file) => {
    const i = path.join(input, file)

    if (fs.statSync(i).isDirectory()) {
      rename(i)
    }
    else {
      if (file.endsWith('.js')) {
        const oldPath = i
        const newPath = i.replace(/\.js$/, '.ts')
        fs.renameSync(oldPath, newPath)
        console.log(`Renamed ${oldPath} to ${newPath}`)
      }
    }
    // if (file.endsWith('.js')) {
    //   const oldPath = `src/${file}`;
    //   const newPath = `src/${file.replace(/\.js$/, '.ts')}`;
    //   fs.renameSync(oldPath, newPath);
    //   console.log(`Renamed ${oldPath} to ${newPath}`);
    // }
  })
}

rename('src3')
