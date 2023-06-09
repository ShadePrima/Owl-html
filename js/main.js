// mobile menu

const nav = document.querySelector('#nav')
const navLink = document.querySelector('#nav-link')
const navBtn = document.querySelector('#nav-btn')
const navWrapper = document.querySelector('#nav-wrapper')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './assets/icons/nav-close.svg'
  } else {
    navBtnImg.src = './assets/icons/nav-open.svg'
  }
}

navLink.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './assets/icons/nav-close.svg'
  } else {
    navBtnImg.src = './assets/icons/nav-open.svg'
  }
}

// scroll animation

AOS.init({
  disabled: 'mobile',
  once: true,
})

//  initialize Swiper
let swiper = new Swiper('.mySwiper', {
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

let swiper2 = new Swiper('.mySwiper2', {
  // effect: 'flip',
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    880: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
  // spaceBetween: 40,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.combat-path-swiper-button1',
    prevEl: '.combat-path-swiper-button2',
  },
})

let swiper3 = new Swiper('.mySwiper3', {
  // effect: 'flip',
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
  // spaceBetween: 40,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.combat-path-swiper-button1',
    prevEl: '.combat-path-swiper-button2',
  },
})
