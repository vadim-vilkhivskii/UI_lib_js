import $ from '../core';

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {

        //*находим значение ширины блока обертки всех слайдов из стилей которые были применины в браузере(getComputedStyle)
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item'); //*находим все слайды в карусели
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li')


        //*находим блок со слайдами и устанавливаем ширину которая будет зависеть от количества слайдов
        slidesField.style.width = 100 * slides.length + '%';

        slides.forEach(slide => {//*устанавливаем ширину для каждого отдельного слайда 
            slide.style.width = width;
        });

        let offset = 0;//* для отслеживания положения слайдера 
        let slideIndex = 0;

        //* смена слайда
        $(this[i].querySelector('[data-slide="next"]')).click((e) => {//*обработчик на срелку переключения слайда
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {//*если дошли до последнего слайда то обнуляем offset
                offset = 0
            } else {
                offset += +width.replace(/\D/g, '');//* добавляем ширину слайда
            }

            slidesField.style.transform = `translateX(-${offset})`;
            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active')
        })
        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {//*обработчик на срелку переключения слайда
            e.preventDefault();
            if (offset == 0) {//*если слайд первый то смещаем на последний

                offset = +width.replace(/\D/g, '') * (slides.length - 1)
            } else {
                offset -= +width.replace(/\D/g, '');//* добавляем ширину слайда
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == 0) {

                slideIndex = slides.length - 1
            } else {
                slideIndex--;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active')
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }); 

    }
}

$('.carousel').carousel();