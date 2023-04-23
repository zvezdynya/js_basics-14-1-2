const producers = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];
console.log(producers[1].name);

let topFilmsList = [];
let body = document.querySelector('body');
let bestFilms = document.createElement('div');

producers.forEach(el => {
    let collection = document.querySelector('.favorite_regissers');
    let part = document.createElement('section');
    part.classList = 'people'; 
    part.innerHTML = `<div class="regisser">
    <h2 class="name">${el.name}</h2>
    <p class="status">${el.career}</p>
</div>
<div class="relock_films">
    <a href="${el.films}">Фильмография</a>
</div>`;
    collection.append(part);
    topFilmsList.push(el.top_rated_film); 
    bestFilms.classList = 'best_films';
    bestFilms.innerHTML += `${el.top_rated_film}, `;
    body.append(bestFilms);
});

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c']; //объявляем массивы

const intersection = (...arrs) => { //через оператор спред присваиваем несколько массивов одному в параметре
    const total = arrs[0].filter((el) => { //фильтруем один массив через другой, сравнивая каждый элемент
    const getIndex = arrs[1].indexOf(el);
    if (getIndex >= 0) {
        return el; 
    }
    });
    if (arrs.length > 2) { //если в массиве больше элементов, то колбэком запускаем функцию intersrction
    intersection(total, ...arrs.slice(2, arrs.length));
    }
    return Array.from(new Set(total)); //возвращаем новый массив, в котором лежат подходящие элементы
};

// console.log(intersection(arr1, arr2)); // [2]
// console.log(intersection(arr3, arr4, arr5)); // ['b']
// console.log(intersection(arr6, arr7, arr8)); // ['b', 'e']