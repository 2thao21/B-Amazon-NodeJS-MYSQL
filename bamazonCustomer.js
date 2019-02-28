var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bAmazonDB"
  });
  connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadID);
    
    afterConnection();
  });

  function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      
      whatToBuy();
    //   console.log(res.product_name, res.department_name, res.price);
      connection.end();
    });
  }

  function whatToBuy(){
      var itemsArr = []
      var query = "SELECT * FROM products";
      connection.query(query, function(err, res){
          if (err) throw err;

          for (let i in res){
              itemsArr.push(res[i].id, res[i].department_name, res[i].product_name, res[i].price)
          }
          inquirer.prompt([
            {
                name: "itemsForSale",
                type: "choice",
                message: "What would you like to buy from the available inventory?",
                choices: itemsArr
            }
        ])
        .then(function(answers){
            console.log("These are the items available for sale: " + answers.itemsForSale);
            queryitem(answers.itemsForSale);
        })
      })
  }

  function queryitem(products) {
    var query = "SELECT * FROM items WHERE name ='" + products + "';";
    connection.query(query, function (err, res) {
      if (err) throw err;
      // console.log(res);
      console.log("Information is as follows:")
      console.log(
        "--------------------------------" +
        "\nItem ID:      " + res[0].name +
        "\nProduct Name:         " + res[0].product_name +
        "\nPrice:    " + res[0].price 
      )
      chosenItemObject = res[0]
    //   price(chosenItemObject.highestBid)
    })
    
  }