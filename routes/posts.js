const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "webdb"
});
db.connect((err) => {
    if(err)
        throw err;
    console.log("Connected to MySQL server.");
});

router.get('/', (req, res) => {
    let sql = "SELECT * FROM posts";
    db.query(sql, (err, result) => {
        if(err)
            throw err
        res.send(result);
    })
})
router.get('/:category', (req, res) => {
    let sql = `SELECT * FROM posts WHERE category = '${req.params.category}'`;
    db.query(sql, (err, result) => {
        if(err)
            throw err
        res.send(result);
    })
})
router.get('/:category/:post_id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE post_id = '${req.params.post_id}'`;
    db.query(sql, (err, result) => {
        if(err)
            throw err
        res.send(result);
    })
})



module.exports = router;