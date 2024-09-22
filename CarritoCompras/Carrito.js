function addToCart(name, brand, cylinder, price, image) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name, brand, cylinder, price, image });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} ha sido añadido al carrito.`);
}



// Función para mostrar los items del carrito
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Obtener los items del carrito desde localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Limpiar el contenedor antes de mostrar los nuevos items
    cartItemsContainer.innerHTML = '';
    
    // Mostrar cada item en el carrito
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
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
document.addEventListener('DOMContentLoaded', displayCartItems);
