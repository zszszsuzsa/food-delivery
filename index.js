const express = require('express');
const app = express();

const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

const cors = require('cors');
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': 'http://localhost:8081',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Expose-Headers", "ETag", 'Access-Control-Allow-Origin');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'))

app.get('/api/all', function (req, res) {

  con.query('SELECT * FROM dbo.MenuItems', function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

app.get('/api/:id', function (req, res) {
  let id = req.params.id;
  con.query('SELECT * FROM dbo.MenuItems WHERE Id=?', id, function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

app.get('/api/category/:category', function (req, res) {
  let category = req.params.category;
  con.query('SELECT * FROM dbo.MenuItems WHERE Category=?', category, function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

app.get('/categorynames', function (req, res) {
  con.query('SELECT DISTINCT Category FROM dbo.MenuItems', function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  })
});

// Top orders Count
app.get('/popular', function (req, res) {
  con.query('SELECT Menu_item_id,Name,Price,COUNT(*) as Quantity FROM dbo.Orders GROUP BY Name Order BY Quantity DESC limit 10', function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  })
});
// Top orders Sum
// app.get('/popular', function (req, res) {
//   con.query('SELECT Menu_item_id,Name,Price,sum(Quantity) as Quantity FROM dbo.Orders GROUP BY Menu_item_id Order BY Quantity DESC limit 10', function (err, rows, fields) {
//     if (err) throw err;
//     res.json(rows);
//   })
// });

// Search
app.get('/search/:keyword', function (req, res) {
  let keyword = req.params.keyword;
  con.query('SELECT * FROM dbo.MenuItems WHERE Name LIKE ?', '%' + keyword + '%', function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

// app.get('/menubycategory', function (req, res) {
//   let menu={};
//   let category="";
//   con.query('SELECT DISTINCT Category FROM dbo.MenuItems', function (err, rows, fields) {
//     if (err) throw err;
//     category=res.json(rows).Category;
//     for (let i=0; i<res.length; i++){
//       category=res.json(rows).Category;
//       menu.push({category: {}})
//     }
//     return menu;
//   })
// });

app.listen(8080, function () {
  console.log('app listening on port 8080');
});
