// Navigate to the main collection page
document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "newpage.html";
});

// Add event listeners for product buttons dynamically
document.querySelectorAll(".product-button").forEach(button => {
    button.addEventListener("click", function() {
        const product = this.getAttribute("data-product");
        window.location.href = `order.html?product=${product}`;
    });
});

// Highlight the active page in the navigation menu
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Ensure the CSS for the active class is added to your stylesheet

// Validate the order form
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const quantity = document.getElementById("quantity").value;

        if (!name || !email || quantity <= 0) {
            alert("Please fill out all fields correctly.");
            event.preventDefault(); // Prevent form submission
        }
    });
}

// Dynamically generate product list
const products = [
    { name: "Shirt", image: "images/shirt.jpg", details: "shirt-details.html" },
    { name: "Dress", image: "images/dress.jpg", details: "dress-details.html" },
    { name: "Pants", image: "images/pants.jpg", details: "pants-details.html" },
    { name: "Shoes", image: "images/shoes.jpg", details: "shoes-details.html" },
    { name: "Jacket", image: "images/jacket.jpg", details: "jacket-details.html" }
];

const productContainer = document.getElementById("product-container");
if (productContainer) {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
            <h3>${product.name}</h3>
            <a href="${product.details}">View Details</a>
        `;
        productContainer.appendChild(productDiv);
    });
}
