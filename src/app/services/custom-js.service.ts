import { Injectable } from '@angular/core';
import * as Isotope from 'isotope-layout';
import * as AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class CustomJSService {

  constructor(
  ) { }

  select = (el: any, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  on = (type: string, el: any, listener: any, all = false) => {
    let selectEl = this.select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach((e: any) => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  onscroll = (el: any, listener: any) => {
    el.addEventListener('scroll', listener)
  }

  scrollto = (el: any) => {
    let header = this.select('#header')
    let offset = header.offsetHeight

    let elementPos = this.select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  initIsotope = () => {
    let portfolioContainer = this.select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = this.select('#portfolio-flters li', true);

      this.on('click', '#portfolio-flters li', (e: any) => {
        e.preventDefault();
        portfolioFilters.forEach((el: any) => {
          el.classList.remove('filter-active');
        });
        e.target.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: e.target.getAttribute('data-filter')
        });
      }, true);

      AOS.refresh();
    }
  }
}
