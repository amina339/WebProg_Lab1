function createCard(product) {
  return `
    <article class="product-card">
      <img class="product-card__image" src="${product.img}" alt="${product.title}">
      <h2 class="product-card__title">${product.title}</h2>
      <p class="product-card__price">${product.price} ₽</p>
      <button class="btn add-to-cart" type="button" data-id="${product.id}">
        Добавить в корзину
      </button>
    </article>
  `;
}