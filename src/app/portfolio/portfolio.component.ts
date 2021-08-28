import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
    public func: FunctionsService
  ) { }

  ngOnInit(): void {
    this.func.getFilters();
  }

}
