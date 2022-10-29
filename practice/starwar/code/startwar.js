/*
Створіть сайт по виводу карточок героїв зоряних війн. 
Дані візьміть тут та збережіть окремим фалом https://swapi.dev/
Стилізуйте карточки використовуючи css. 
HTML розмітка має створюватись через JS 

1. Створіть сайт по виводу карточок героїв зоряних війн. + 
2.  HTML, CSS, JS  +
3. Забрати дані з ресурсу та зберегти окремо + 
4. Вивести дані в консоль підключивши файл до загального проекту
5. Стилізувати карточки (вигадати стиль) і в ці карточки додати дані із фалику swapi
*/

console.dir(swapi.results)

swapi.results.forEach(function (el, ind) {
    document.getElementById("star_container")
        .innerHTML += `<div class="card black" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${el.name}</h5>
      <p class="card-text">${el.birth_year}</p>
      <a href="#" class="btn btn-primary">${el.homeworld}</a>
    </div>
  </div>`
    console.dir(el)

})

/*

Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.



*/
