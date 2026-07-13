// 1. Create variables to hold our starting values (0 items, 0 rupees)
let count = 0;
let totalMoney = 0;

// 2. Function that runs when Burger button is clicked
function orderBurger() {
    count = count + 1;         // Add 1 to item count
    totalMoney = totalMoney + 40; // Add 40 to total money
    updateScreen();            // Refresh the screen details
}

// 3. Function that runs when Pizza button is clicked
function orderPizza() {
    count = count + 1;         // Add 1 to item count
    totalMoney = totalMoney + 60; // Add 60 to total money
    updateScreen();            // Refresh the screen details
}

// 4. This helper function updates the text on the HTML page instantly
function updateScreen() {
    document.getElementById("total-items").innerText = count;
    document.getElementById("total-price").innerText = totalMoney;
}

// 5. Function that runs when "Place Order" is clicked
function checkout() {
    if (count === 0) {
        alert("Your cart is empty! Please add some food first.");
    } else {
        alert("🎉 Order Placed Successfully!\nTotal Amount: ₹" + totalMoney + "\nCollect your food at the counter.");
        
        // Reset everything back to zero after ordering
        count = 0;
        totalMoney = 0;
        updateScreen();
    }
}