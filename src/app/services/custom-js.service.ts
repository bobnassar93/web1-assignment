import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomJSService {

  constructor() { }

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
}
