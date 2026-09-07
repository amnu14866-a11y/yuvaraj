
const products = [
    {
        id: 1,
        name: "Cute Panda",
        price: 49,
        emoji: "🐼",
        category: "animals"
    },
    {
        id: 2,
        name: "Happy Cat",
        price: 39,
        emoji: "🐱",
        category: "cute"
    },
    {
        id: 3,
        name: "Funny Frog",
        price: 45,
        emoji: "🐸",
        category: "funny"
    },
    {
        id: 4,
        name: "Magic Unicorn",
        price: 59,
        emoji: "🦄",
        category: "cute"
    },
    {
        id: 5,
        name: "Cool Dog",
        price: 49,
        emoji: "🐶",
        category: "animals"
    },
    {
        id: 6,
        name: "Crazy Monkey",
        price: 55,
        emoji: "🐵",
        category: "funny"
    },
    {
        id: 7,
        name: "Little Bear",
        price: 45,
        emoji: "🐻",
        category: "cute"
    },
    {
        id: 8,
        name: "Happy Penguin",
        price: 50,
        emoji: "🐧",
        category: "animals"
    }
];

let cart = [];

function displayProducts(list) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <div class="product-image">
                ${product.emoji}
            </div>

            <h3>${product.name}</h3>

            <div class="price">
                ₹${product.price}
            </div>

            <button class="add-btn"
                onclick="addToCart(${product.id})">
                Add to Cart 🛒
            </button>
        `;

        container.appendChild(card);
    });
}

function filterProducts(category) {

    if (category === "all") {
        displayProducts(products);
        return;
    }

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);
}

function addToCart(id) {

    const product = products.find(
        product => product.id === id
    );

    cart.push(product);

    updateCart();

    alert(product.name + " added to cart! 🎉");
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <div>
                <span class="cart-item-emoji">
                    ${product.emoji}
                </span>

                <strong>${product.name}</strong>
            </div>

            <span>₹${product.price}</span>

            <button class="remove-btn"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(item);
    });

    cartCount.textContent = cart.length;

    cartTotal.textContent = total;
}

function openCart() {

    document.getElementById("cart-modal").style.display = "block";

    updateCart();
}

function closeCart() {

    document.getElementById("cart-modal").style.display = "none";
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty! 🛒");
        return;
    }

    let total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    alert(
        "Thank you for your order! 🎉\n\n" +
        "Total amount: ₹" + total
    );

    cart = [];

    updateCart();

    closeCart();
}

displayProducts(products);
