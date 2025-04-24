'use strict';
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Функція для створення шаблону одного елемента
  function imgTemplate({ original, preview, description }) {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
}

/* Функція для створення всієї галереї на основі масиву зображень.Повертає HTML рядок із шаблонами всіх елементів галереї*/
 function imagesTemplate(images) {
  
// Метод map створює масив рядків-розмітки, які потім об'єднуються в один рядок
  return images.map(imgTemplate).join('');
}

// Знаходжу елемент з класом ul.gallery галереї
  const galleryElem = document.querySelector('.gallery');

// Перевіряю, чи існує елемент ('.gallery') щоб уникнути помилки
  if (galleryElem) {
    
// Створюю розмітку та додаємо її всередину елемента
  const markup = imagesTemplate(images);

// використовую метод для додавання рядка в існуючую розмітку в положення всередину тега ul
    galleryElem.insertAdjacentHTML('beforeend', markup);

// Додаю обробника подіі на клик галереі.Делегування подіі через елемент galleryElem
  galleryElem.addEventListener('click', event => {
    //Додаю метод який скасовує стандарну поведінку браузера (перехід за посиланням)
    event.preventDefault();

    // Перевіряю, чи клік відбувся на зображення.
    const img = event.target;

    // Перевіряю.Якщо клік був не на зображенні нічого не робимо
    if (img.nodeName !== 'IMG') return;

    /*отримую посилання, яке містить велике зображення.Отримуємо parentElement оскільки img є дочерній єлемент.Link це батьківський єлемент <a> який містить велике зображення */
    const link = img.parentElement;

    //якщо посилання не знайдено, нічого не робимо
    if (!link) return;
    // Виводжу в консоль результат про клік по зображенню
    console.log(`Клік по зображенню : ${link.href}`);

    /*Створюю  модальне вікно з використанням basicLightbox зовнішньої бібліотеки
  imageSrc-це змінна яка містить в собі URL великого зображення яке відобразиться в модальному вікні. instance-цезмінна яка містить екземпляр модального вікна.create- це функція створює модальне вікно*/
    const imageSrc = link.href;
    const instance = basicLightbox.create(
      `<img src="${imageSrc}" 
    alt="Modal Image"
    style="border: 4px solid black; border-radius: 8px;"
    
    />`
    );

    // додаю метод який відкриває модальне вікно. За замовчуванням модальне вікно закривається, коли робиш клік за межі його вмісту.
    instance.show();

    
  });
  }
 else {
//  Якщо елемент .gallery не знайдено, виводимо повідомлення в консоль
  console.error("Елемент '.gallery' не знайдено.");
}


