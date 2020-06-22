const fs = require('fs')
const path = require('path')

const __dirName = path.resolve();

let tableName

try {
    tableName = process.argv.find((arg) => arg.includes('--tableName'))
        .split('=')[1]
} catch (err) {
    return console.error('--tableName parameter not found. Please specify a table name.')
}

const fileName = new Date().getTime() + `_${tableName}.sql`

fs.writeFile(path.resolve(__dirName, `../node-blog-backend/database/migrations/${fileName}`), '', (err) => {
    if (err) throw new Error(err)
    console.log('Create a new migration file in the migrations folder.')
})