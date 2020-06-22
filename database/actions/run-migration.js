const knex = require('./mysql')
const promise = require('bluebird')
const path = require('knex')
const fs = require('fs')
const db = knex.client.config.connection.fatabase || null

function replaceAll(str, delimeter, replacement) {
    return str.split(delimiter).join(replacement)
}


// fs.readdir(
//     path.resolve(
//         __dirName,
//         '../migrations'
//     ),
//     "utf-8",
//     (err, files) => {
//         if(err) throw new Error(err)
//         return promise.each(files)
//     }
// )