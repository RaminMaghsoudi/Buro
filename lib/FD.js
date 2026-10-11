import sql from "better-sqlite3";
const DB = sql("office.db");

export async function getBuros() {
  return DB.prepare("SELECT * FROM buro").all();
}
export async function getBuro(title) {
  return DB.prepare("SELECT * FROM buro WHERE title = ?").get(title);
}
export async function getBurosByTitle(title) {
  return DB.prepare("SELECT * FROM buro WHERE title = ?").all(title);
}
