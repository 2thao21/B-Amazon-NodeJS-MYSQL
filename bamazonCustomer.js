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
  
  function afterConnection(){
      connection.query("SELECT * FROM products", function(err, response){
          if (err) throw err;
          console.log("                          Welcome to BAmazon" + "\n");
          for (var i = 0; i < response.length; i++){
              console.log("ID: " + response[i].id + " || " + "Product Name: " + response[i].product_name + " || "
              + "Department: " + response[i].department_name + " || " + "Price: " + response[i].price + "\n");
          }

     whatToBuy();
      })
  };

  function whatToBuy(){
    
    // creating inquirer prompt for customer to choose item id and quantity
      inquirer.prompt([
          {
            name: "itemsForSale",
            type: "input",
            message: "What would you like to buy from the available inventory? Please enter in the item ID: ",
         
          },
          {
            name: "quantitySelected",
            type: "input",
            message: "Please enter in the quantity you would like to purchase: "
          }
      ])
      .then(function(answers){
            var idInput = answers.itemsForSale;
            var quantityInput = answers.quantitySelected;
            yourPurchase(idInput, quantityInput);
      })
  }

  function yourPurchase(idSelected, quantityInput){
    connection.query("SELECT * FROM products WHERE id = " + idSelected, function(err, response){
        if (err) throw err;

        if (quantityInput <= response[0].stock_quantity){
            var priceTotal = response[0].price * quantityInput;
            console.log("Here is your total cost: $" + priceTotal + " for "  + quantityInput + " " + response[0].product_name + "\n");
            console.log("Thank you for your purchase!");

            // attempt to update database after successful purchase

            // connection.query("UPDATE products SET stock_quantity = " + (response[0].stock_quantity - quantityInput) + "WHERE id= " + idSelected, function(err, response){
            //     // if (err) throw err;
            //     console.log("Only " + response[0].stock_quantity + " " + response[0].product_name + " left in inventory");
            // })

            // Could not get database to update. Had to comment out above code. 
            
        }
        else {
            console.log("Apologies, insufficient quantity" + " " + response[0].product_name);
            
        }
        connection.end();
    });
  }

afterConnection();
