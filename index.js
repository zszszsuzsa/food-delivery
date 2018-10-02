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

// Top orders Sum
app.get('/popular', function (req, res) {
  sql= 'SELECT Id,Name,Price,sum(Quantity)as Quantity FROM (SELECT * FROM dbo.Orders LEFT JOIN dbo.Menuitems ON dbo.Orders.Menu_item_id = dbo.Menuitems.Id) as Aggr GROUP BY Name Order BY Quantity DESC limit 10'
  con.query(sql, function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  })
});

// Search
app.get('/search/:keyword', function (req, res) {
  let keyword = req.params.keyword;
  con.query('SELECT * FROM dbo.MenuItems WHERE Name LIKE ?', '%' + keyword + '%', function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post('/orderdata', function (req, res) {
  var values=req.body;
    con.query('INSERT INTO dbo.Orders(Menu_item_id,Buyer_name,Buyer_address,Buyer_phone)VALUES ?', [values], function (err) {
      if (err) throw err;
      res.send("OK");
      console.log(values.length+"record(s) inserted");
    })
  });

app.listen(8080, function () {
  console.log('app listening on port 8080');
});
