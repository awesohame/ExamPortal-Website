const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const mysql = require('mysql2');
const { log } = require('console');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'users',
    password: 'mysqlpw'
});


// try {
//     let q = `SELECT * FROM user`
//     connection.query(q, (err, results) => {
//         if (err) throw err;

//         console.log(results);
//     }
//     );
// } catch (err) {
//     console.log(err);
// }

// connection.end();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/frontend/views"));

app.use(express.static('frontend'));

app.get('/', function (req, res) {
    // res.render("./frontend/html/home.html")
    res.sendFile(path.join(__dirname, '/frontend/html/home.html'));
})

app.get('/login', function (req, res) {
    // res.render("./frontend/html/home.html")
    res.sendFile(path.join(__dirname, '/frontend/html/login.html'));
})

app.get('/signup', function (req, res) {
    // res.render("./frontend/html/home.html")
    res.sendFile(path.join(__dirname, '/frontend/html/signup.html'));
})

app.post('/contact', function (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    try {
        let q = `SELECT * FROM contact`;
        connection.query(q, (err, results) => {
            if (err) throw err;


            try {
                let newq = `INSERT INTO contact (name,email,subject,message) VALUES ("${name}","${email}","${subject}","${message}")`;
                connection.query(newq, [name, email, subject, message], (err, results) => {
                    if (err) throw err;

                    // res.redirect('/continue');
                    // res.render('continue.ejs', { username });
                    // console.log(results);
                    res.redirect("/");
                }
                );
            } catch (err) {
                console.log(err);
                res.send("ERROR in db");

            }


            console.log(results);

        }
        );
    } catch (err) {
        console.log(err);
        res.send("ERROR in db");
    }
    finally {
        res.sendFile(path.join(__dirname, '/frontend/html/home.html'));
    }

    // console.log(req.body);
    // console.log(email);
    // console.log(subject);
    // console.log(message);

})

app.post('/login', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    // console.log(req.body);
    try {
        let q = `SELECT * FROM user WHERE username = ? AND pass = ?`
        connection.query(q, [username, password], (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                // res.redirect('/continue');
                res.render('continue.ejs', { username });
            } else {
                // res.send('Incorrect Username and/or Password!');
                res.render('incorrectpw.ejs', { username })
            }
            //console.log(results);
        }
        );
    } catch (err) {
        console.log(err);
        res.send("ERROR in db")
    }
    // res.send(`Welcome ${username}. pw is ${password}`);
})

app.post('/signup', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    // console.log(req.body);
    try {
        let q = `SELECT * FROM user WHERE username = ?`
        connection.query(q, [username], (err, results) => {
            if (err) throw err;
            if (results.length != 0) {
                // res.redirect('/continue');
                // res.render('continue.ejs', { username });

                res.render('userexists.ejs', { username });
            } else {

                try {
                    let newq = `INSERT INTO user (username,pass) VALUES ("${username}","${password}")`;
                    connection.query(newq, [username, password], (err, results) => {
                        if (err) throw err;

                        // res.redirect('/continue');
                        // res.render('continue.ejs', { username });
                        // console.log(results);
                        res.redirect("/login");
                    }
                    );
                } catch (err) {
                    console.log(err);
                    res.send("ERROR in db");

                }
            }

            console.log(results);

        }
        );
    } catch (err) {
        console.log(err);
        res.send("ERROR in db");
    }

    // try {
    //     let newq = `INSERT INTO user (username,pass) VALUES ("${username}","${password}")`;
    //     connection.query(newq, [username, password], (err, results) => {
    //         if (err) throw err;

    //         // res.redirect('/continue');
    //         // res.render('continue.ejs', { username });
    //         console.log(results);
    //         res.redirect("/login");
    //     }
    //     );
    // } catch (err) {
    //     console.log(err);
    //     res.send("ERROR in db");

    // }

    // res.send(`Welcome ${username}. pw is ${password}`);
})

app.post('/exam/:user', function (req, res) {
    let user = req.params.user;
    res.render("exam.ejs", { user });
    // res.sendFile(path.join(__dirname, '/frontend/html/exam.html'));
})

app.post('/examphy/:user', function (req, res) {
    let user = req.params.user;
    res.render("examphy.ejs", { user });
    // res.sendFile(path.join(__dirname, '/frontend/html/exam.html'));
})

app.post('/examchem/:user', function (req, res) {
    let user = req.params.user;
    res.render("examchem.ejs", { user });
    // res.sendFile(path.join(__dirname, '/frontend/html/exam.html'));
})

app.post('/exammaths/:user', function (req, res) {
    let user = req.params.user;
    res.render("exammaths.ejs", { user });
    // res.sendFile(path.join(__dirname, '/frontend/html/exam.html'));
})
// req.params
app.get('/solutions/maths', function (req, res) {
    res.sendFile(path.join(__dirname, '/frontend/html/maths.html'))
})

app.get('/solutions/physics', function (req, res) {
    res.sendFile(path.join(__dirname, '/frontend/html/phy.html'))
})

app.get('/solutions/chemistry', function (req, res) {
    res.sendFile(path.join(__dirname, '/frontend/html/chem.html'))
})


app.listen(port, () => {
    console.log('app is listening');
});