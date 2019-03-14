var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nordby2015",
    database: "bamazon"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("\n" + "-------------------" + "\n" + "WELCOME TO BAMAZON!" + "\n" + "-------------------");
    createTable()
})

var createTable = function () {
    connection.query("Select * from products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("\n" + " " + res[i].itemid + " -- " + res[i].productname + " | Department: " + res[i].departmentname + " | Price: $" + res[i].price + " | Quantity In Stock: " + res[i].stockquantity + "\n");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function (res) {
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: "Please enter the item # of the product you wish to purchase: ",
    }]).then(function (answer) {
        var correct = false;
        for (var i = 0; i < res.length; i++) {
            if (res[i].itemid == answer.choice && res[i].stockquantity > 0) {
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    type: "input",
                    name: "quant",
                    message: "How many would you like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;

                        } else {
                            return false;
                        }
                    }
                }).then(function (answer) {
                    if ((res[id].stockquantity - answer.quant) > -1) {
                        connection.query("UPDATE products SET stockquantity='" + (res[id].stockquantity - answer.quant) + "'WHERE itemid='" + product + "'", function (err, res2) {
                            createTable();
                            var totalCost = answer.quant * res[id].price;
                            var cost = totalCost.toFixed(2);
                            console.log("\n" + "----------------------------------------------------------------" + "\n");
                            console.log("Your purchase was successful!" + "\n");
                            console.log("Purchase amount: $" + cost + "\n");
                            console.log("----------------------------------------------------------------" + "\n");
                        })
                    } 
                    else {
                        console.log("\n" + "----------------------------------------------------------------" + "\n");
                        console.log("Sorry. Insufficient Quantity!" + "\n");
                        console.log("----------------------------------------------------------------" + "\n");
                        promptCustomer(res);
                    }

                })
            }
            else if (res[i].itemid == answer.choice && res[i].stockquantity == 0) {
                correct = true;
                console.log("\n" + "----------------------------------------------------------------" + "\n");
                console.log("Sorry. That item is no longer available!" + "\n");
                console.log("----------------------------------------------------------------" + "\n");
                promptCustomer(res);

            }
        }
        if (i == res.length && correct == false) {
            console.log("\n" + "----------------------------------------------------------------" + "\n");
            console.log("Oops. It appears you've entered an invalid item #." + "\n");
            console.log("----------------------------------------------------------------" + "\n");
            promptCustomer(res);
        }
    })
}
