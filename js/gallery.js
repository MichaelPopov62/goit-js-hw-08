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
// Функція для створення всієї на основі масиву зображень 
function imagesTemplate(images) {
  
  // Метод map створює масив рядків-розмітки, які потім об'єднуються в один рядок
  return images.map(imgTemplate).join('');
}
// Знаходимо елемент з класом ul.gallery галереї
const galleryElem = document.querySelector('.gallery');

// Перевіряємо, чи існує елемент
if (galleryElem) {
  // Створюємо розмітку та додаємо її всередину елемента
  const markup = imagesTemplate(images);

  // використовую метод для додавання рядка в існуючую розмітку в положення всередину тега ul
  galleryElem.insertAdjacentHTML('beforeend', markup);

  // Додаємо обробник подій  на клик по зображенню
  galleryElem.addEventListener('click', event => {
    //цей метод скасовує стандарну поведінку браузера (перехід за посиланням)
    event.preventDefault();

    // Перевіряємо, чи клік відбувся на посиланні з класом .gallery-link
    const link = event.target.closest('.gallery-link');

    // Перевіряємо, чи клік був на посиланні.Якщо клік був не на дочірньому елементі або на самому контейнері, нічого не робимо

    if (!link || event.target === event.currentTarget) return;
    {
      console.log(`Клік по зображенню: ${link.href}`);
       

      // Тут можна додати додаткову логіку (наприклад, відкриття модального вікна)
    }
    // if (link) {
    //   const imageSrc = link.href;
    //   openModal(imageSrc); // Ваша функція для відкриття модального вікна
    // }
  });
} else {
  //  Якщо елемент .gallery не знайдено, виводимо повідомлення в консоль
  console.error("Елемент '.gallery' не знайдено.");
}


