//Packages
const http = require('http');
const url = require('url');
const mysql = require('mysql2');

//MySQL Database Connection
const con = mysql.createConnection({
    host: "bsu-gimm260-fall-2021.cwtgn0g8zxfm.us-west-2.rds.amazonaws.com",
    user: "KAYLAHUYNH",
    password: "EvWiJBwAl5CHVhe8IW9Cplf4RvlXf8fixIK",
    database: 'KAYLAHUYNH'
});

//Parameters for server
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    //GET parameters (e.g. www.google.com?search=how-to-programming&)
    const getParameters = url.parse(request.url, true).query;

    //SELECT statement variables
    let selectSql = 'SELECT Name, Reddit_Freq, Google_Freq, Location FROM Genshin_Characters_Data';
        whereStatements = [];
        orderByStatements = [];
        queryParameters = [];

    if (typeof getParameters.reddit !== 'undefined') {
        const sort = getParameters.reddit;
        if (sort === 'ASC') {
            orderByStatements.push('Reddit_Freq ASC');
        } else if (sort === 'DESC') {
            orderByStatements.push('Reddit_Freq DESC')
        }
    }

    if (typeof getParameters.google !== 'undefined') {
        const sort = getParameters.google;
        if (sort === 'ASC1') {
            orderByStatements.push('Google_Freq ASC');
        } else if (sort === 'DESC1') {
            orderByStatements.push('Google_Freq DESC')
        }
    }

    if (typeof getParameters.character !== 'undefined' && getParameters.character.length > 0) {
        const character = getParameters.character;
        whereStatements.push('Name LIKE ?');
        queryParameters.push('%' + character + '%');
    }

    if (typeof getParameters.location !== 'undefined' && getParameters.location.length > 0) {
        const location = getParameters.location;
        whereStatements.push('Location LIKE ?');
        queryParameters.push('%' + location + '%');
    }

    //Dynamically add WHERE expressions to SELECT statements if needed
    if (whereStatements.length > 0) {
        selectSql = selectSql + ' WHERE ' + whereStatements.join(' AND ');
    }

    //Dynamically add ORDER BY expressions to SELECT statements if needed
    if (orderByStatements.length > 0) {
        selectSql = selectSql + ' ORDER BY ' + orderByStatements.join(', ');
    }

    console.log(selectSql);
    con.query(selectSql, queryParameters, function (err, result) {
        if (err) {
            throw err;
        } else {
            response.writeHead(
                200, {                             //HTTP Code 200 = Everything is OK
                'Content-Type': 'text/json',       //Setting return type of result to JSON
                'Access-Control-Allow-Origin': '*' //Prevent CORS error
            }).end(
                JSON.stringify({
                    'result': 200,
                    'classes': result
                }));
        }
    });
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});