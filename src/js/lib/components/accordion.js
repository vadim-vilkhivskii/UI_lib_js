import $ from '../core';

$.prototype.accordion = function (headActive = 'accordion-head--active', contentActive =
    'accordion-content--active', paddings = 40) {  
        for (let i = 0; i < this.length; i++) {
            $(this[i]).click(() => {//* вешам обработчик на все заголовки аккордеона
                $(this[i]).toggleClass(headActive);//*при клике тоглим класс активности
                $(this[i].nextElementSibling).toggleClass(contentActive);//*ищем соседний элемент и тоглим класс активности

                if(this[i].classList.contains(headActive)){//*елси у элемента на который кликнули есть класс активности 
                    this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling//*тогда уведичиваем  высоту
                    .scrollHeight + paddings + 'px'//* следующего элемента на высоту которая у него должна быть + отступы +px
                }else{//*если класа активности нет тогда устанавливаем высоту следующего элементы в ноль
                    this[i].nextElementSibling.style.maxHeight = '0px'
                }
            })
            
        }
};
$('.accordion-head').accordion();