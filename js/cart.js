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

// увеличивает количество товара на 1
function increaseQty(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += 1;
    saveCart();
    renderCart();
  }
}

// уменьшает количество на 1. Если станет 0 — удаляем
function decreaseQty(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty -= 1;
    if (item.qty <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
      renderCart();
    }
  }
}

// считаем общую сумму корзины
function getTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
  });
  return total;
}

// выводим содержимое корзины на страницу
function renderCart() {
  cartList.innerHTML = '';

  if (cart.length === 0) {
    cartList.innerHTML = '<li class="cart-empty">Корзина пуста</li>';
  } else {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      const title = document.createElement('span');
        title.className = 'title';
        title.textContent = item.title;

        const decrease = document.createElement('button');
        decrease.className = 'qty-btn decrease';
        decrease.dataset.id = item.id;
        decrease.textContent = '−';

        const qty = document.createElement('span');
        qty.className = 'qty';
        qty.textContent = item.qty;

        const increase = document.createElement('button');
        increase.className = 'qty-btn increase';
        increase.dataset.id = item.id;
        increase.textContent = '+';

        const remove = document.createElement('button');
        remove.className = 'remove-btn';
        remove.dataset.id = item.id;
        remove.textContent = '×';

        li.append(title, decrease, qty, increase, remove);
            cartList.appendChild(li);
            });

    // обработчики кнопок корзины
    document.querySelectorAll('.increase').forEach(btn => {
      btn.addEventListener('click', () => increaseQty(Number(btn.dataset.id)));
    });
    document.querySelectorAll('.decrease').forEach(btn => {
      btn.addEventListener('click', () => decreaseQty(Number(btn.dataset.id)));
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.id)));
    });
  }

  // обновляем сумму
  cartTotal.textContent = getTotal();

  // обновляем счётчик корзины
  let count = 0;
  cart.forEach(item => {
    count += item.qty;
  });
  cartCount.textContent = count;
}