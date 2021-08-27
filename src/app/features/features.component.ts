import { Component, OnInit } from '@angular/core';
import { Features } from '../classes/features';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(public func: FunctionsService) { }

  ngOnInit(): void {
    this.func.getFeatures();
  }

}
