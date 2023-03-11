const express = require('express');
const server = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testDB",
});

db.connect(function(err) {

    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});


server.use(express.json());
server.use(cors());
//register
server.post("/register", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { username } = req.body;
    const { password } = req.body;

    let sql = "INSERT INTO persons (name, email, username, password) VALUES (?,?,?,?)"
    db.query(sql, [name, email, username,password], (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            console.log(result);
        }
    })
});

server.get("/persons", (req, res) => {

    let sql = "SELECT * FROM persons";
    db.query(sql, (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }

    })
});

server.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { email } = req.body;
    const { username } = req.body;
    const { password } = req.body;

    let sql = "UPDATE persons SET name = ?, cost = ?, category = ? WHERE id = ?";
    db.query(sql, [name, email, username,password, id], (err,result) =>{
        if (err) {
            console.log(err);
        }else{

            res.send(result);
        }
    })
});

server.delete("/delete/:index", (req,res) =>{
    const { index } = req.params

    let sql = "DELETE FROM persons WHERE id = ?"
    db.query(sql, [index], (err,result) =>{err ? console.log(err) : res.send(result)})
})
server.listen(3001, () =>
    console.log("Running in the port 3001")
);