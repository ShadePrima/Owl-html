AOS.init({
  disabled: 'mobile',
  once: true,
})

//  initialize Swiper
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.button-arrow-right',
    prevEl: '.button-arrow-left',
  },
})

var swiper2 = new Swiper('.mySwiper2', {
  effect: 'coverflow',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.button-swiper-2-left',
    prevEl: '.button-swiper-2-right',
  },
})
