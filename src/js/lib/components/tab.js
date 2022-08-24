import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', ()=>{//*вешаем обработчик на каждый tab-item
            $(this[i])//* обращение к жлементу с которым взаимодействуем 
            .addClass('tab-item--active')//* добавляем класс активности 
            .siblings()//* назодим все соседнии элементы (исключая текущий)
            .removeClass('tab-item--active')//* удаляем клас активности у всех соседей
            .closest('.tab')//* находим ближайшего родителя с класом tab
            .find('.tab-content')//* ищем элементы с класом tab-content внуттри р
            .removeClass('tab-content--active')//* удаляем клас активности в блоках контента
            .eq($(this[i]).index())//*среди элементов .tab-content используем элемент по определённому номеру
            .addClass('tab-content--active');//* и добавляем клас активности 
        })
        
    }
}

$('[data-tabpanel] .tab-item').tab();