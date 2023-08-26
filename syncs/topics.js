const fs = require('fs')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/main.db')

fs.readFile('./topics/topics.txt', 'utf-8', (err, data) => {
    if (err) throw err
    array = data.split('\n')
    array.forEach(line => {
        const number = parseInt(line.split('.')[0])
        const topic = line.split('.')[1]
        db.run('INSERT INTO topics(ID, TOPIC) VALUES(?, ?)', [number, topic], function(err){
            if (err) throw err
        })

    });    
})