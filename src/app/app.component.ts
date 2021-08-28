import { Component, OnInit } from '@angular/core';
import { CustomJSService } from './services/custom-js.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web1 Assignment';

  constructor(
    private customJS: CustomJSService
  ) { }


  ngOnInit(): void {

    /**
   * Navbar links active state on scroll
   */
    let navbarlinks = this.customJS.select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink: any) => {
        if (!navbarlink.hash) return;
        let section = this.customJS.select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navbarlinksActive);
    this.customJS.onscroll(document, navbarlinksActive);

    /**
       * Scrolls to an element with header offset
       */
    const scrollto = (el: any) => {
      let header = this.customJS.select('#header')
      let offset = header.offsetHeight;

      let elementPos = this.customJS.select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    }

    /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
    let selectHeader = this.customJS.select('#header');
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
        } else {
          selectHeader.classList.remove('header-scrolled');
        }
      }
      window.addEventListener('load', headerScrolled);
      this.customJS.onscroll(document, headerScrolled);
    }

    /**
   * Back to top button
   */
    let backtotop = this.customJS.select('.back-to-top');
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      }
      window.addEventListener('load', toggleBacktotop)
      this.customJS.onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    this.customJS.on('click', '.mobile-nav-toggle', (e: any) => {
      this.customJS.select('#navbar').classList.toggle('navbar-mobile');
      e.target.classList.toggle('bi-list');
      e.target.classList.toggle('bi-x');
    });

    /**
   * Mobile nav dropdowns activate
   */
    this.customJS.on('click', '.navbar .dropdown > a', (e: any) => {
      if (this.customJS.select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        e.target.nextElementSibling.classList.toggle('dropdown-active');
      }
    }, true);

    /**
   * Scrool with ofset on links with a class name .scrollto
   */
    this.customJS.on('click', '.scrollto', (e: any) => {
      if (this.customJS.select(e.target.hash)) {
        e.preventDefault();

        let navbar = this.customJS.select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          let navbarToggle = this.customJS.select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        this.customJS.scrollto(e.target.hash);
        window.location.hash = e.target.hash;
      }
    }, true);


    /**
   * Scroll with ofset on page load with hash links in the url
   */
    // window.addEventListener('load', () => {
    //   if (window.location.hash) {
    //     if (this.customJS.select(window.location.hash)) {
    //       this.customJS.scrollto(window.location.hash);
    //     }
    //   }
    // });
    if (window.location.hash) {
      if (this.customJS.select(window.location.hash)) {
        this.customJS.scrollto(window.location.hash);
      }
    }
  }
}
