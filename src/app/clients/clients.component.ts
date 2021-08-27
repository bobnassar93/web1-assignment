import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../services/functions.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(public func: FunctionsService) { }

  ngOnInit(): void {
    this.func.getClients();
  }

}
