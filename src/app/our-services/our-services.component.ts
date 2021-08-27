import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor(public func: FunctionsService) { }

  ngOnInit(): void {
    this.func.getServices();
  }

}
