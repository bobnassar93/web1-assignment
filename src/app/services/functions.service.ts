import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Features } from '../classes/features';
import { Services } from '../classes/services';
import { Clients } from '../classes/clients';
@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  features: Features[] = [];
  services: Services[] = [];
  clients: Clients[] = [];
  constructor(private apiCaller: HttpClient) { }

  getClients = () => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getClients').subscribe((res: any) => {
      const client = new Clients(
        res._id,
        res.client_img
      );

      this.clients.push(client);
    });
  }

  getFeatures = () => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getFeatures').subscribe((res: any) => {
      const feature = new Features(
        res._id,
        res.feature_title,
        res.feature_description,
        res.feature_img
      );

      this.features.push(feature);
    });
  }

  getServices = () => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getServices').subscribe((res: any) => {
      const service = new Services(
        res._id,
        res.service_title,
        res.service_description,
        res.service_icon,
        res.color
      );

      this.services.push(service);
    });
  }
}
