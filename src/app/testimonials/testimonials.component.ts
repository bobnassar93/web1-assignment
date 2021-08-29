import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      /**
   * Testimonials slider
   */
      const swiper = new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });
    }, 500);
  }

  ngOnInit(): void {
  }

}
