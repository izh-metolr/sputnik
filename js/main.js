const form = document.querySelector('.form-popup');
const formBtn = document.querySelector('.header_action__btn');
formBtn.addEventListener('click', function(e) {
    this.nextElementSibling.classList.toggle('_active');
});

window.addEventListener('click', function(e) {
    if (!e.target.classList.contains('header_action__btn-box') && !e.target.closest('.header_action__btn-box')) {
        form.classList.remove('_active');
    }
});



const swiperNews = new Swiper('.news_section__slider', {

    slidesPerView: 3, // Кол-во показываемых слайдов
    spaceBetween: 40, // Расстояние между слайдами
    loop: true, // Бесконечный слайдер,

    centeredSlides: false, // Размещать слайдеры по центру


    breakpoints: {
        1600: {

        },
        700: {

        },
        400: {

        }
    },

    pagination: {
        el: '.news_section__box .swiper-pagination',
    },

    navigation: {
        nextEl: '.news_section__box .swiper-button-next',
        prevEl: '.news_section__box .swiper-button-prev',
    },
});


const swiper = new Swiper('.swiper-container', {

    slidesPerView: 1, // Кол-во показываемых слайдов
    spaceBetween: 50, // Расстояние между слайдами
    loop: false, // Бесконечный слайдер

    centeredSlides: false, // Размещать слайдеры по центру
    width: '250',

    autoplay: { // автопрокрутка
        delay: 5000, // задержка
    },

    breakpoints: {
        1200: {

        },
        700: {

        },
        400: {

        }
    },

    pagination: {
        el: '.index-top__right .swiper-pagination',
    },

});


window.addEventListener('load', function() {
    document.querySelectorAll('.news_section__slider-element').forEach(i => {
        let heightBox = i.offsetHeight;
        let heightContent = i.querySelector('.news_section__slider-element-box').offsetHeight;
        let heightLink = i.querySelector('.news_section__slider-element-link').offsetHeight;
        let resultHeight = heightBox - heightContent - heightLink;

        i.querySelector('.news_section__slider-element-picture').style.height = resultHeight + 'px'

    });

    const contains = (event, element) => event.target.classList.contains(element) || event.target.closest(element);



    window.addEventListener('click', function(e) {
        if (contains(e, 'arrow-year-icon')) {
            e.target.closest('.news-line__right').querySelector('.dropdown-year').classList.toggle('active');
        }


        if (e.target.closest('.dropdown-year')) {
            console.log(e.target)
            e.target.closest('.dropdown-year').querySelectorAll('li').forEach(i => {
                i.classList.remove('active')
            });
            e.target.classList.add('active')
            document.querySelector('.dropdown-text').innerText = e.target.innerText;
            document.querySelector('.dropdown-year').classList.remove('active');
        }


    });

})