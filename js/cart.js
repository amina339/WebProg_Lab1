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

