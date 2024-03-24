document.addEventListener("DOMContentLoaded", function() {
    // Market page ids
    const goldCount = document.getElementById('gold-amount');
    const buyMeat1 = document.getElementById('buy-meat-1');
    const buyMeat16 = document.getElementById('buy-meat-16');
    const buyBerry1 = document.getElementById('buy-berry-1');
    const buyBerry16 = document.getElementById('buy-berry-16');
    const buySalmon1 = document.getElementById('buy-salmon-1');
    const buySalmon16 = document.getElementById('buy-salmon-16');

    // Market data
    let marketData = {
        goldCount: 50, // Initial gold amount
        items: {
            berries: 0,
            meat: 0,
            salmon: 0
        }
    };

    // Function to update gold count on the page
    function updateGoldCount() {
        goldCount.textContent = marketData.goldCount;
    }

    // Function to update item quantities on the page
    function updateItemQuantities() {
        // Update berries
        buyBerry1.textContent = marketData.items.berries;
        buyBerry16.textContent = marketData.items.berries;

        // Update meat
        buyMeat1.textContent = marketData.items.meat;
        buyMeat16.textContent = marketData.items.meat;

        // Update salmon
        buySalmon1.textContent = marketData.items.salmon;
        buySalmon16.textContent = marketData.items.salmon;
    }

    // Event listeners for buying items
    buyBerry1.addEventListener('click', function() {
        if (marketData.goldCount >= 10) {
            marketData.goldCount -= 10;
            marketData.items.berries += 1;
            updateGoldCount();
            updateItemQuantities();
        } else {
            alert('Not enough gold!');
        }
    });

    buyMeat1.addEventListener('click', function() {
        // Similar logic for buying meat
    });

    buySalmon1.addEventListener('click', function() {
        // Similar logic for buying salmon
    });

    // Update initial values on page load
    updateGoldCount();
    updateItemQuantities();
});
