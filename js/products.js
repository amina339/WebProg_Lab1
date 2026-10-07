// создаём одну карточку товара из шаблона
function createCard(product) {
  const template = document.getElementById('cardTemplate');
  const card = template.content.cloneNode(true);

  // заполняем поля данными товара
  const img = card.querySelector('.product-card__image');
  img.src = product.img;
  img.alt = product.title;

  card.querySelector('.product-card__title').textContent = product.title;
  card.querySelector('.product-card__price').textContent = product.price + ' ₽';
  card.querySelector('.add-to-cart').dataset.id = product.id;

  return card;
}