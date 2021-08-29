import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CustomJSService } from '../services/custom-js.service';
import { FunctionsService } from '../services/functions.service';
import GLightbox from '../../../node_modules/glightbox/dist/js/glightbox'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  constructor(
    public func: FunctionsService,
    private customJS: CustomJSService
  ) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.customJS.initIsotope();
      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
    }, 2000);
  }

  ngOnInit(): void {
    this.func.getFilters();
  }

}
