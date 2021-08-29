import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Features } from '../classes/features';
import { Services } from '../classes/services';
import { Clients } from '../classes/clients';
import { Filters } from '../classes/filters';
import { Portfolio } from '../classes/portfolio';
import { CustomJSService } from './custom-js.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  features: Features[] = [];
  services: Services[] = [];
  clients: Clients[] = [];
  filters: Filters[] = [];
  portfolios: Portfolio[] = [];

  constructor(
    private apiCaller: HttpClient,
    private customJS: CustomJSService
  ) { }

  getClients = (): void => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getClients')
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          const client = new Clients(
            res[i]._id,
            res[i].client_img
          );

          this.clients.push(client);
        }
      });
  }

  getFeatures = (): void => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getFeatures')
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          const feature = new Features(
            res[i]._id,
            res[i].feature_title,
            res[i].feature_description,
            res[i].feature_img
          );

          this.features.push(feature);
        }
      });
  }

  getServices = (): void => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getServices')
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          const service = new Services(
            res[i]._id,
            res[i].service_title,
            res[i].service_description,
            res[i].service_icon,
            res[i].color
          );

          this.services.push(service);
        }
      });
  }

  getFilters = (): void => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getFilters')
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          const filter = new Filters(
            res[i]._id,
            res[i].display_name,
            res[i].type,
          )

          this.filters.push(filter);
        }

        this.getPortfolios();
      });
  }

  getPortfolios = (): void => {
    this.apiCaller.get('https://web1-assignment-heroku.herokuapp.com/getPortfolio')
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          const portfolio = new Portfolio(
            res[i]._id,
            res[i].filter,
            res[i].title,
            res[i].details,
            res[i].portfolio_img
          );
          this.portfolios.push(portfolio);
        }
      });
  }
}
