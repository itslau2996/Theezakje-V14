const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/main.db')

async function sync() {
    db.run(`
    CREATE TABLE IF NOT EXISTS topics(
        ID integer PRIMARY KEY,
        TOPIC text NOT NULL
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS feedback(
        user text,
        feedback TEXT NOT NULL
    )`)
}

sync()
