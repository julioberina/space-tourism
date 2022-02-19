import { Injectable } from '@angular/core';
import * as dataJson from '../assets/shared/data.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getData(): any {
    return dataJson;
  }
}
