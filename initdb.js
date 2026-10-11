const sql = require("better-sqlite3");
const db = sql("office.db");

const dummyBuro = [
  {
    title: "سخا و نوبت تعویض پلاک",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "ایجاد حساب کاربری سخا",
    describtion: "",
    price: "144.000",
    date: "",
    creator: "",
  },
  {
    title: "سخا و نوبت تعویض پلاک",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "ورود به سیستم سخا و پرینت برگه سخا بعد از تایید مامور پست",
    describtion: "",
    price: "255.000",
    date: "",
    creator: "",
  },
  {
    title: "سخا و نوبت تعویض پلاک",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "ورود به سیستم سخا و پرینت برگه سخا بعد از تایید مامور پست",
    describtion: "",
    price: "255.000",
    date: "",
    creator: "",
  },
  {
    title: "سخا و نوبت تعویض پلاک",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle:
      "احراز نشانی محل سکونت توسط پست با پرینت و مراجعه مجدد و پرینت سخا",
    describtion: "",
    price: "135.000",
    date: "",
    creator: "",
  },
  {
    title: "سخا و نوبت تعویض پلاک",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle:
      "ایجاد حساب کاربری سامانه مالیات خودرو و استعلام با پرداخت از کارت مشتری با پرینت",
    describtion: "",
    price: "74.000",
    date: "",
    creator: "",
  },
  {
    title: "بیمه ورزشی",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "",
    describtion: "",
    price: "59.000",
    date: "",
    creator: "",
  },
  {
    title: "سامانه ملی مجوزها",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "",
    describtion: "",
    price: "59.000",
    date: "",
    creator: "",
  },
  {
    title: "ثبت احوال NCR",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "",
    describtion: "",
    price: "59.000",
    date: "",
    creator: "",
  },
  {
    title: "سامانه سپتام",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "",
    describtion: "",
    price: "59.000",
    date: "",
    creator: "",
  },
  {
    title: "پلیس اماکن",
    slug: "",
    urls: "www.sakha.epolice.ir",
    subTitle: "",
    describtion: "",
    price: "369.000",
    date: "",
    creator: "",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS buro (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT,
       title TEXT NOT NULL,
       urls TEXT NOT NULL,
       subTitle TEXT NOT NULL,
       describtion TEXT NOT NULL,
       price TEXT NOT NULL,
       date TEXT NOT NULL,
       creator TEXT NOT NULL
    )
`,
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO buro VALUES (
         null,
         @slug,
         @title,
         @urls,
         @subTitle,
         @describtion,
         @price,
         @date,
         @creator
      )
   `);

  for (const buro of dummyBuro) {
    stmt.run(buro);
  }
}

initData();
