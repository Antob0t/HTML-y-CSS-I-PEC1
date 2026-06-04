import 'lite-youtube-embed';
import Swiper from 'swiper';
import { Navigation, Pagination, Lazy } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  speed: 1000,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});