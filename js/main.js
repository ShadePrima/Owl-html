const nav = document.querySelector('#nav')
const navLink = document.querySelector('#nav-link')
const navBtn = document.querySelector('#nav-btn')
const navWrapper = document.querySelector('#nav-wrapper')
const navBtnImg = document.querySelector('#nav-btn-img')

console.log(navBtnImg)

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
