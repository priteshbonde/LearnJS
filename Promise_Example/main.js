const mysql = require('mysql');

function getCustomers() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: 'MyNewPass',
        database: 'testDb'
    });

    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM customers LIMIT 1", (error, result)=> {
            if(error)
                reject(error);
            else
                resolve(result);
                // MyNewPass
            connection.end();
        });
    });
}

async function getCustomersAsync() {

    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user:'root',
            password: 'MyNewPass',
            database: 'testDb'
        });
    
        let result = await connection.query("SELECT * FROM customers LIMIT 1");
        console.log("result", result);
    } catch (error) {
        console.log("Error: ", error);
    }

    connection.end();
}

const promise = getCustomers();
console.log("Promise ", promise);

promise
.then(result => console.log('resolved ', result))
.catch(error => console.log("Error", error));


const customer = getCustomersAsync();
console.log("Customer", customer);
console.log('Bye!')