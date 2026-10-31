const sql = require("better-sqlite3");
const db = sql("BURODB.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS burotable (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL,
       date TEXT NOT NULL,
       creator TEXT NOT NULL,
       activate TEXT NOT NULL,
       title TEXT NOT NULL,
       subtitle TEXT NOT NULL,
       price TEXT NOT NULL
    )
`,
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO burotable VALUES (
         null,
         @slug,
         @date,
         @creator,
         @activate,
         @title,
         @subtitle,
         @price
      )
   `);

  //   for (const meal of dummyMeals) {
  //     stmt.run(meal);
  //   }
}

initData();
