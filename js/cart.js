// элементы корзины на странице
const cartList  = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');

// массив товаров в корзине, загружаем из localStorage, если там есть товары
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// сохраняет корзину в localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// добавляет товар в корзину по id
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: 1,
    });
  }

  saveCart();
  renderCart();
}

// удаляет товар из корзины полностью
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

