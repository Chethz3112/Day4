/*A warehouse tracks inventory levels for products and raises an alert if any product's quantity falls below a
 certain threshold. The threshold levels are:
Critical: less than 10 units (should alert "Restock Immediately").
Low: between 10 and 20 units (should alert "Stock is Low").
Adequate: more than 20 units (no alert needed).
Question 1: Write a JavaScript function checkInventory(productName, quantity) that takes a product name and its quantity, 
and prints an alert message based on the inventory level.*/


function checkInventory(productName, quantity) {
    
    if (quantity < 10) {
        console.log(`Alert for ${productName}: Restock Immediately`);
    } else if (quantity >= 10 && quantity <= 20) {
        console.log(`Alert for ${productName}: Stock is Low`);
    } else {
        console.log(`Inventory for ${productName}: Adequate`);
    }
}

checkInventory("Widget A", 5);  
checkInventory("Widget B", 15); 
checkInventory("Widget C", 30); 
