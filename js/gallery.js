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



//Створюю функцію для створення шаблону одного, прописую потрібні атрибути  в шаблоні
  function imgTemplate({ original, preview, description })
  {
    return `<li class="gallery-item">
      <a class="gallery-link" href="${original}">
       <img
        class="gallery-image"
        src="${preview}"
         data-source="${original}"
          alt="${description}"
    />
  </a>
</li>
`;
}

/* Створюю функцію для створення всієї галереї на основі масиву зображень.Повертає HTML рядок із шаблонами всіх елементів галереї*/
function imagesTemplate(images) {
  // Створюємо порожній масив для зберігання рядків розмітки
  const markupArray = [];

// Перебираємо кожен елемент масиву images
  for (const image of images) {

/* Викликаємо функцію imgTemplate для кожного елемента,зберігаю створену розмітку у змінній markup і додаю результат до масиву */
    const markup = imgTemplate(image);
    markupArray.push(markup);
  }

/* Об'єдную всі рядки з масиву markupArray в один HTML-рядок, який представляє готову розмітку для всієі галереі.Метод join('') з'єднує елементи масиву без додаткових роздільників */
  const finalMarkup = markupArray.join('');

// Повертаємо об'єднаний рядок
  return finalMarkup;
}

/* Знаходжу перший елемент на сторінці з класом ul.gallery галереї.Використовую метод querySelector-який повертає перший знайдений єлемент якій відповідає селектору.Якщо такий єлемент існує то galleryElem буде містить цей елемент,якщо ні тоді буде null */
const galleryElem = document.querySelector('.gallery');

//Дивлюся в консолі результат пошуку
  console.log('Елемент галереі знайдено', galleryElem);

// Перевіряю, чи точно існує елемент ('.gallery') щоб уникнути помилки
 if (galleryElem) {

// Створюю розмітку та додаємо її всередину елемента
  const markup = imagesTemplate(images);

//Виводжу в консоль повний код HTML- галереі створений функцією magesTemplate
  // console.log('Розмітка:', markup);

// використовую метод для додавання рядка в існуючую розмітку в положення всередину тега ul
  galleryElem.insertAdjacentHTML('beforeend', markup);

// Додаю обробника подіі на клик галереі.Делегування подіі через елемент galleryElem
   galleryElem.addEventListener('click', event => {
    
// Додаю метод який скасовує стандарну поведінку браузера (перехід за посиланням)
    event.preventDefault();

// Перевіряю, чи клік відбувся на зображення.
    const img = event.target;

// Перевіряю.Якщо клік був не на зображенні нічого не робимо
    if (img.nodeName !== 'IMG') return;

/* отримую значеня з data -атрибуту source елемента img, який містить посилання на велике зображення в модальному вікні*/
    const imageSrc = img.dataset.source;

// якщо зображення не знайдено, нічого не робимо
     if (!imageSrc) return;
     
// Виводжу в консоль результат про клік по зображенню
    // console.log(`Клік по зображенню : ${imageSrc}`);

// Створюю модальне вікно з використанням basicLightbox зовнішньої бібліотеки 

    const instance = basicLightbox.create(
      `<img src="${imageSrc}" 
          alt="${img.alt}"
          style="border: 4px solid black; border-radius: 8px;"
    />`
     );
//Виводжу шлях зображення яке виводиться в модальному вікні
     console.log('Модальне вікно відкривається з :', imageSrc);

// Додаю метод який відкриває модальне вікно. За замовчуванням модальне вікно закривається, коли робиш клік на зображення або за межі його вмісту.
    instance.show();
  });
 } else {
   
// Якщо елемент .gallery не знайдено, виводимо повідомлення в консоль
  console.error("Елемент '.gallery' не знайдено.");
}

