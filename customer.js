var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: "",
	database: 'bamazon_db'
});

connection.connect();
prompt.start();

console.log(" ");
console.log("Welcome to Bamazon!");
console.log(" ");
console.log("We have the following products for sale:");
console.log(" ");

connection.query('SELECT * FROM products', function(err, rows) {
	if (err) throw err;
	for (var i = 0; i < rows.length; i++) {
		console.log("Item ID: " + rows[i].ID + " Name: " + rows[i].product_name + " Price: $" + rows[i].price + " Stock: " + rows[i].stock_quantity);
	};
	var schema = {
		properties: {
			ID: {
				description: 'What is the ID of the product you want?'
			},
			quantity: {
				description: 'How many would you like?'
			}
		}
	}
	prompt.get(schema, function(err, result) {
		if (rows[result.ID - 1].stock_quantity < result.quantity) {
			console.log("Insufficient Quantity");
		} else {
			var orderPrice = (rows[result.ID-1].price * result.quantity);
			var department = rows[result.ID-1].department_name;
			console.log("Yes we can do that!");
			console.log("Your order costs: $" + orderPrice);
			console.log("Thanks for shopping at Bamazon!");
			
			var newQuantity = ( rows[result.ID - 1].stock_quantity - result.quantity);
			connection.query('UPDATE products SET stock_quantity=' + newQuantity + ' WHERE ID=' + result.ID + ';', function(err, res) {
				if (err) throw err;
			});

		};
	});
});