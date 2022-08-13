const entities = [
    {
        city: 'Rostov-on-Don \n LCD admiral',
        time: '3.5 months',
        area: '81 m2',
        cost: 'Upon request',
        img: 'img/Admiral.png'
    },
    {
        city: 'Sochi \n Thieves',
        time: '4 months',
        area: '105 m2',
        cost: 'Upon request',
        img: 'img/Thieves.png'
    },
    {
        city: 'Rostov-on-Don \n Patriotic',
        time: '3 months',
        area: '93 m2',
        cost: 'Upon request',
        img: 'img/Patriotic.png'
    }
]
//Селекторы для элементов слайда
const city = document.querySelector('#city')
const time = document.querySelector('#time')
const area = document.querySelector('#area')
const cost = document.querySelector('#cost')
const img = document.querySelector('#slider-image')
//Селекторы для управления
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const dots = document.querySelectorAll('.dot-selector');

const setEntity = (index) => {
    //Смена текста в полях и картинки
    city.innerText = entities[index].city
    time.innerText = entities[index].time
    area.innerText = entities[index].area
    cost.innerText = entities[index].cost
    img.setAttribute ("src", entities[index].img);

    //Обнуление всех точек
    dots.forEach(element => {
        element.setAttribute("src", "img/dot_innactive.svg");
    });
    
    //Замена активной точки на белую
    dotActive = document.querySelector('#dot' + index);
    dotActive.setAttribute("src", "img/dot_active.svg");
}

let currentId = 0
//Клик по стрелке влево
prev.addEventListener('click', () => {
    //Если на крайнем левом слайде (ИД = 0)
    if (currentId == 0){
        //Длина массива 3, но начальный индекс 0
        currentId = entities.length-1;
        setEntity(currentId);
        return;
    }
    currentId -= 1;
    setEntity(currentId);
})
//Клик по стрелке вправо
next.addEventListener('click', () => {
    if (currentId == 2){
        //Длина массива 3, но начальный индекс 0
        currentId = 0;
        setEntity(currentId);
        return;
    }
    currentId += 1;
    setEntity(currentId);
})
//Клик по точкам
dots.forEach(item => {
    item.addEventListener('click', event => {
        //Получение ID. Можно добавить больше слайдов и скрипт будет работать, если формат dot#, где # - индекс точки
        let dotId = item.getAttribute('id');
        //Удаление первых трех символов из ID 'dot'
        dotId = dotId.substring(3);
        //Смена слайда
        setEntity(dotId);
    })
})