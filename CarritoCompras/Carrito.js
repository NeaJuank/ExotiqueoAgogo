function addToCart(name, brand, cylinder, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = { name, brand, cylinder, price }; // Sin imagen
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} ha sido añadido al carrito.`);
}



function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-details">
                <h2>${item.name}</h2>
                <p><strong>Marca:</strong> ${item.brand}</p>
                <p><strong>Cilindraje:</strong> ${item.cylinder}</p>
                <p><strong>Precio:</strong> $${item.price} USD</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
}


// Llamar a la función para mostrar los items al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear(); // Limpia el localStorage al cargar la página
    displayCartItems(); // Muestra los items del carrito
});
