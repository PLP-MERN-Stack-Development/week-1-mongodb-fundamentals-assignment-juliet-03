plp_bookstore> db.books.insertMany([
// ...   {
// ...     title: 'To Kill a Mockingbird',
// ...     author: 'Jules',
// ...     genre: 'fiction',
// ...     published_year: 2012,
// ...     price: 500,
// ...     in_stock: 'true',
// ...     pages: 112,
// ...     publisher: 'longman'
// ...   },
// ...   {
// ...     title: 'literature book',
// ...     author: 'Hillary',
// ...     genre: 'fiction',
// ...     published_year: 2005,
// ...     price: 800,
// ...     in_stock: 'false',
// ...     pages: 203,
// ...     publisher: 'charles scribners'
// ...   },
// ...   {
// ...     title: 'The Catcher in the Rye',
// ...     author: 'J.D Salinger',
// ...     genre: 'fantansy',
// ...     published_year: 1949,
// ...     price: 950,
// ...     in_stock: 'true',
// ...     pages: 353,
// ...     publisher: 'harperCollins'
// ...   },
// ...   {
// ...     title: 'Pride and Prejudice',
// ...     author: 'Jane Austen',
// ...     genre: 'romance',
// ...     published_year: 1990,
// ...     price: 750,
// ...     in_stock: 'true',
// ...     pages: 302,
// ...     publisher: 'whitehall'
// ...   },
// ...   {
// ...     title: 'The Great Gatsby',
// ...     author: 'Scott',
// ...     genre: 'fiction',
// ...     published_year: 2003,
// ...     price: 650,
// ...     in_stock: 'false',
// ...     pages: 249,
// ...     publisher: 'lippincott'
// ...   },
// ...   {
// ...     title: 'The hobbit',
// ...     author: 'Tolken',
// ...     genre: 'fantansy',
// ...     published_year: 1980,
// ...     price: 1250,
// ...     in_stock: 'true',
// ...     pages: 410,
// ...     publisher: 'George Allen'
// ...   },
// ...   {
// ...     title: 'Atomic habits',
// ...     author: 'James Clear',
// ...     genre: 'classic',
// ...     published_year: 2018,
// ...     price: 560,
// ...     in_stock: 'true',
// ...     pages: 275,
// ...     publisher: 'Avery'
// ...   },
// ...   {
// ...     title: 'The Silent Patient',
// ...     author: 'Alex Michaelides',
// ...     genre: 'thriller',
// ...     published_year: 2019,
// ...     price: 1100,
// ...     in_stock: 'false',
// ...     pages: 189,
// ...     publisher: 'Celadon Books'
// ...   },
// ...   {
// ...     title: 'Educated Tara',
// ...     author: 'Westover',
// ...     genre: 'mystery',
// ...     published_year: 1950,
// ...     price: 500,
// ...     in_stock: 'false',
// ...     pages: 320,
// ...     publisher: 'Random House'
// ...   },
// ...   {
// ...     title: "A Doll's House",
// ...     author: 'Jakes Will',
// ...     genre: 'romance',
// ...     published_year: 2013,
// ...     price: 850,
// ...     in_stock: 'true',
// ...     pages: 230,
// ...     publisher: 'crown publishing group'
// ...   }
 ])
// ... 
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('683dff9f86b614eeaac59f35'),
//     '1': ObjectId('683dff9f86b614eeaac59f36'),
//     '2': ObjectId('683dff9f86b614eeaac59f37'),
//     '3': ObjectId('683dff9f86b614eeaac59f38'),
//     '4': ObjectId('683dff9f86b614eeaac59f39'),
//     '5': ObjectId('683dff9f86b614eeaac59f3a'),
//     '6': ObjectId('683dff9f86b614eeaac59f3b'),
//     '7': ObjectId('683dff9f86b614eeaac59f3c'),
//     '8': ObjectId('683dff9f86b614eeaac59f3d'),
//     '9': ObjectId('683dff9f86b614eeaac59f3e')
//   }
// }


// retrieve data 
plp_bookstore> db.books.find()
[
  {
    _id: ObjectId('683dff9f86b614eeaac59f35'),
    title: 'To Kill a Mockingbird',
    author: 'Jules',
    genre: 'fiction',
    published_year: 2012,
    price: 500,
    in_stock: 'true',
    pages: 112,
    publisher: 'longman'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f36'),
    title: 'literature book',
    author: 'Hillary',
    genre: 'fiction',
    published_year: 2005,
    price: 800,
    in_stock: 'false',
    pages: 203,
    publisher: 'charles scribners'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f37'),
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    genre: 'fantansy',
    published_year: 1949,
    price: 950,
    in_stock: 'true',
    pages: 353,
    publisher: 'harperCollins'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f38'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'romance',
    published_year: 1990,
    price: 750,
    in_stock: 'true',
    pages: 302,
    publisher: 'whitehall'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f39'),
    title: 'The Great Gatsby',
    author: 'Scott',
    genre: 'fiction',
    published_year: 2003,
    price: 650,
    in_stock: 'false',
    pages: 249,
    publisher: 'lippincott'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3a'),
    title: 'The hobbit',
    author: 'Tolken',
    genre: 'fantansy',
    published_year: 1980,
    price: 1250,
    in_stock: 'true',
    pages: 410,
    publisher: 'George Allen'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3b'),
    title: 'Atomic habits',
    author: 'James Clear',
    genre: 'classic',
    published_year: 2018,
    price: 560,
    in_stock: 'true',
    pages: 275,
    publisher: 'Avery'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3c'),
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'thriller',
    published_year: 2019,
    price: 1100,
    in_stock: 'false',
    pages: 189,
    publisher: 'Celadon Books'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3d'),
    title: 'Educated Tara',
    author: 'Westover',
    genre: 'mystery',
    published_year: 1950,
    price: 500,
    in_stock: 'false',
    pages: 320,
    publisher: 'Random House'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3e'),
    title: "A Doll's House",
    author: 'Jakes Will',
    genre: 'romance',
    published_year: 2013,
    price: 850,
    in_stock: 'true',
    pages: 230,
    publisher: 'crown publishing group'
  }]

  
//   update

plp_bookstore> db.books.updateMany({in_stock: "false"}, {$set: {in_stock: "true"}});
// {
// //   acknowledged: true,
// //   insertedId: null,
// //   matchedCount: 4,
// //   modifiedCount: 4,
// //   upsertedCount: 0
// // }
plp_bookstore> db.books.find()
[
  {
    _id: ObjectId('683dff9f86b614eeaac59f35'),
    title: 'To Kill a Mockingbird',
    author: 'Jules',
    genre: 'fiction',
    published_year: 2012,
    price: 500,
    in_stock: 'true',
    pages: 112,
    publisher: 'longman'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f36'),
    title: 'literature book',
    author: 'Hillary',
    genre: 'fiction',
    published_year: 2005,
    price: 800,
    in_stock: 'true',
    pages: 203,
    publisher: 'charles scribners'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f37'),
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    genre: 'fantansy',
    published_year: 1949,
    price: 950,
    in_stock: 'true',
    pages: 353,
    publisher: 'harperCollins'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f38'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'romance',
    published_year: 1990,
    price: 750,
    in_stock: 'true',
    pages: 302,
    publisher: 'whitehall'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f39'),
    title: 'The Great Gatsby',
    author: 'Scott',
    genre: 'fiction',
    published_year: 2003,
    price: 650,
    in_stock: 'true',
    pages: 249,
    publisher: 'lippincott'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3a'),
    title: 'The hobbit',
    author: 'Tolken',
    genre: 'fantansy',
    published_year: 1980,
    price: 1250,
    in_stock: 'true',
    pages: 410,
    publisher: 'George Allen'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3b'),
    title: 'Atomic habits',
    author: 'James Clear',
    genre: 'classic',
    published_year: 2018,
    price: 560,
    in_stock: 'true',
    pages: 275,
    publisher: 'Avery'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3c'),
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'thriller',
    published_year: 2019,
    price: 1100,
    in_stock: 'true',
    pages: 189,
    publisher: 'Celadon Books'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3d'),
    title: 'Educated Tara',
    author: 'Westover',
    genre: 'mystery',
    published_year: 1950,
    price: 500,
    in_stock: 'true',
    pages: 320,
    publisher: 'Random House'
  },
  {
    _id: ObjectId('683dff9f86b614eeaac59f3e'),
    title: "A Doll's House",
    author: 'Jakes Will',
    genre: 'romance',
    published_year: 2013,
    price: 850,
    in_stock: 'true',
    pages: 230,
    publisher: 'crown publishing group'
  }
]
// delete dat
plp_bookstore> db.books.deleteOne({pages: 230})
