const products = [
  {
    name: 'Blush Filter - Blush líquido',
    price: 29.00,
    stars: 4.8,
    reviews: 431,
    seller: 'Huda Beauty',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw29adbb56/images/hi-res/SKU/SKU_6416/739356_swatch.jpg?sw=585&sh=585&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwa6ae3ae7/images/hi-res/alternates/PID_alternate1/PID_alternate1_4542/P10058240_1.jpg'
  },
  {
    name: 'Cloud Crush Blush - Rubor en Polvo',
    price: 33.99,
    stars: 4.4,
    reviews: 48,
    seller: 'Too Faced',
    image: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwdc73eb83/images/hi-res/SKU/SKU_3978/646528_swatch.jpg',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw4df7dc8c/images/hi-res/alternates/PID_alternate2/PID_alternate2_2460/P10048315_2.jpg'
  },
  {
    name: 'Gloss Bomb Stix - Gloss en Stick con Purpurina',
    price: 25.00,
    stars: 4.5,
    reviews: 17,
    seller: 'Fenty Beauty',
    image: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw63f799ea/images/hi-res/SKU/SKU_6316/751393_swatch.jpg',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5c93fa94/images/hi-res/alternates/PID_alternate1/PID_alternate1_4490/P1000206201_1.jpg'
  },
  {
    name: 'Soft Pinch Set - Miniestuche labios y mejillas',
    price: 28.00,
    stars: 5.0,
    reviews: 3,
    seller: 'Rare Beauty',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw280c82e9/images/hi-res/SKU/SKU_6252/748248_swatch.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwec8b6d27/images/hi-res/alternates/PID_alternate3/PID_alternate3_3482/P10061422_3.jpg'
  },
  {
    name: 'HD Skin Blush & Glow - Paleta Blush & Highlighter Crème',
    price: 84.00,
    stars: 4.9,
    reviews: 174,
    seller: 'Make Up For Ever',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwa212ae0f/images/hi-res/PID_principal/PID_principal_5070/P1000203737_principal.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw126497ca/images/hi-res/alternates/PID_alternate1/PID_alternate1_4197/P1000203737_1.jpg'
  },
  {
    name: 'El Estuche de Brochas para el Rostro - Aplicación intuitiva, acabado perfecto',
    price: 34.99,
    stars: 4.9,
    reviews: 82,
    seller: 'Sephora Collection',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw7760e4e7/images/hi-res/SKU/SKU_5682/697583_swatch.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd6c68f35/images/hi-res/alternates/PID_alternate1/PID_alternate1_4137/P10059973_1.jpg'
  },
  {
    name: 'Baby Bake - Polvos sueltos formato de viaje',
    price: 21.99,
    stars: 4.6,
    reviews: 1057,
    seller: 'Huda Beauty',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwde361df9/images/hi-res/SKU/SKU_2253/547960_swatch.jpg?sw=265&sh=265&sm=fit', 
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb2b3150d/images/hi-res/alternates/PID_alternate1/PID_alternate1_3673/P10016375_1.jpg'
  },
  {
    name: 'Double Wear Stay In Place SPF 10 - Fondo De Maquillaje',
    price: 40.00,
    stars: 4.6,
    reviews: 57,
    seller: 'Estée Lauder',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw51cb4201/images/hi-res/SKU/SKU_2/258928_swatch.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw54ca7158/images/hi-res/alternates/PID_alternate1/PID_alternate1_624/P38211_1.jpg'
  },
  {
    name: 'Dior Forever Skin Correct - Corrector de alta cobertura 24 hrs',
    price: 42.00,
    stars: 4.3,
    reviews: 150,
    seller: 'Dior',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw51b68809/images/hi-res/SKU/SKU_3850/652808_swatch.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw7ed46b99/images/hi-res/alternates/PID_alternate2/P10048279_2.jpg'
  },
  {
    name: 'Make Me Blush - Colorete Líquido Textura Ligera Larga Duración',
    price: 50.00,
    stars: 4.8,
    reviews: 114,
    seller: 'Yves Saint Laurent',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd91f7e68/images/hi-res/SKU/SKU_5645/739160_swatch.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw52bc7f35/images/hi-res/alternates/PID_alternate1/PID_alternate1_4105/P10059711_1.jpg'
  },
  {
    name: 'HELLA THICC VOLUMIZING MASCARA - Máscara de pestañas para más volumen',
    price: 19.99,
    stars: 4.1,
    reviews: 1102,
    seller: 'Fenty Beauty',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw8eb75578/images/hi-res/SKU/SKU_4005/661679_swatch.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw66bd7dda/images/hi-res/alternates/PID_alternate3/PID_alternate3_2876/P10049348_3.jpg'
  },
  {
    name: 'Nutritive - Sérum Noche 8h - Tratamiento de noche acondicionador',
    price: 56.00,
    stars: 4.6,
    reviews: 717,
    seller: 'Kérastase',
    image: 'https://www.sephora.es/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw95facb22/images/hi-res/SKU/SKU_4189/691848_swatch.jpg?sw=265&sh=265&sm=fit',
    hoverImage: 'https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwfe93d91d/images/hi-res/alternates/PID_alternate2/PID_alternate2_2590/P10050794_2.jpg'
  },
];

const productsContainer = document.getElementById('products');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
      <a href="#">
      <img 
        src="${product.image}" 
        alt="${product.name}"
        class="product-image"
        data-hover="${product.hoverImage}">
      </a>
      <a href="#"><h3>${product.name}</h3></a>
      <p>${product.price} €</p>
      <p>⭐ ${product.stars} (${product.reviews} reseñas)</p>
      <p>Vendedor: ${product.seller}</p>
  `;
  productsContainer.appendChild(productCard);

  const productImage = productCard.querySelector('.product-image');

  productImage.addEventListener('mouseover', () => {
    productImage.src = productImage.dataset.hover;
  });

  productImage.addEventListener('mouseout', () => {
    productImage.src = product.image;
  });
});


const icons = [
  {
    id: 'shop',
    image: 'https://img.icons8.com/pastel-glyph/64/place-marker--v1.png',
    alt: 'tienda',
    text: 'Tiendas & Servicios',
  },
  {
    id: 'user',
    image: 'https://img.icons8.com/parakeet-line/48/gender-neutral-user.png',
    alt: 'usuario',
    text: 'Iniciar sesión',
  },
  {
    id: 'user2',
    image: 'https://img.icons8.com/parakeet-line/48/gender-neutral-user.png',
    alt: 'usuario',
    text: '',
  },
  {
    id: 'like',
    image: 'https://img.icons8.com/android/48/like.png',
    alt: 'like',
    text: '',
  },
  {
    id: 'basket',
    image: 'https://img.icons8.com/ios/50/shopping-bag--v1.png',
    alt: 'carrito',
    text: '',
  }
]

const navIcons = document.querySelector('.nav-icons');

icons.forEach(icon => {
  const a = document.createElement('a');
  a.href = '#';
  a.id = icon.id;

  const img = document.createElement('img');
  img.src = icon.image;
  img.alt = icon.alt;

  if (icon.text) {
    a.appendChild(document.createTextNode(icon.text));
}

  a.appendChild(img);

  navIcons.appendChild(a);
});


const links = ['Marcas', 'Nuevo', 'Beauty Ofertas', 'Maquillaje', 'Tratamiento', 'Perfume', 'Cabello', 'Cuerpo', 'Sephora Collection', 'Minis', 'Servicios'];

const navLinks= document.getElementById('nav-links');

const ulLinks = document.createElement('ul');

links.forEach(link => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = '#';
  a.text = link;

  if (link === 'Beauty Ofertas') {
    a.classList.add('red');
  }

  li.appendChild(a);
  ulLinks.appendChild(li);
});

navLinks.appendChild(ulLinks);


const nameFilters = ['Categoría', 'Marcas', 'Precio', 'Descuento', 'Por valoración de producto', 'Colores', 'Efectos sombra de ojos', 'Formato', 'Belleza sostenible', 'Formulación', 'Tipos de piel'];

const filters = document.getElementById('filters');

const ulFilters = document.createElement('ul');

nameFilters.forEach(filter => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');

  a.href = '#';
  a.text = filter;

  img.src = 'https://img.icons8.com/ios-glyphs/30/chevron-down.png';
  img.alt = 'flecha hacia abajo';

  if (filter === 'Descuento') {
    a.classList.add('red');
  };

  a.appendChild(img);
  li.appendChild(a);
  ulFilters.appendChild(li);
});

filters.appendChild(ulFilters);