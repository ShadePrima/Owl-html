AOS.init({
  // disabled: 'mobile',
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
