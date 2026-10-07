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
  function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
  // уведомление о заказе на странице сразу
  showToast('Заказ создан!');

  cart = [];
  saveCart();
  renderCart();

  orderModal.close();
  orderForm.reset();
});

// выводит все карточки товаров на страницу
function renderProducts() {
  productsContainer.innerHTML = ''; 

  products.forEach(product => {
    const card = createCard(product);

    card.querySelector('.add-to-cart').addEventListener('click', (event) => {
      const id = Number(event.currentTarget.dataset.id);
      addToCart(id);
    });

    productsContainer.appendChild(card); 
  });
}

renderProducts();
renderCart();