// элементы корзины
const cartButton = document.getElementById('cartButton');
const cartModal  = document.getElementById('cartModal');
const closeCart  = document.getElementById('closeCart');

// контейнер для карточек товаров
const productsContainer = document.getElementById('products');

// элементы модалки и формы
const checkoutButton = document.getElementById('checkoutButton');
const orderModal     = document.getElementById('orderModal');
const orderForm      = document.getElementById('orderForm');
const cancelOrder    = document.getElementById('cancelOrder');

// открыть модалку корзины
cartButton.addEventListener('click', () => {
  cartModal.showModal();
});

// закрыть модалку корзины
closeCart.addEventListener('click', () => {
  cartModal.close();
});

// открыть модалку заказа (кнопка внутри корзины)
checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Корзина пуста');
    return;
  }
  cartModal.close();
  orderModal.showModal();
});

// закрыть модалку заказа
cancelOrder.addEventListener('click', () => {
  orderModal.close();
});

// обработка формы заказа
orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Заказ создан!');

  cart = [];
  saveCart();
  renderCart();

  orderModal.close();
  orderForm.reset();
});

// выводит все карточки товаров на страницу
function renderProducts() {
  let html = '';
  products.forEach(product => {
    html += createCard(product);
  });
  productsContainer.innerHTML = html;

  // вешаем обработчик на все кнопки "добавить в корзину"
  const buttons = document.querySelectorAll('.add-to-cart');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      addToCart(id);
    });
  });
}

renderProducts();
renderCart();