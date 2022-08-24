import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', ()=>{//*вешаем обработчик на каждый tab-item
            $(this[i])//* обращение к жлементу с которым взаимодействуем 
            .addClass('tab-item--active')//* добавляем класс активности 
            .siblings()//* назодим все соседнии элементы (исключая текущий)
            .removeClass('tab-item--active')//* удаляем клас активности у всех соседей
            .closest('.tab')//* назодим родителя с класом tab
            .find('.tab-content')//* ищем жлементы с класом tab-content внуттри ро
            .removeClass('tab-content--active')
            .eq($(this[i]).index())
            .addClass('tab-content--active');
        })
        
    }
}

$('[data-tabpanel] .tab-item').tab();