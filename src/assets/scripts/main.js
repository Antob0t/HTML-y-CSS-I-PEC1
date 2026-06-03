import Swiper from 'swiper';
import { Navigation, Pagination, Lazy } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Lazy],
  loop: true,
  speed: 1000,
  
  lazy: {
    loadPrevNext: true,
  },
  preloadImages: false,
  watchSlidesProgress: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});