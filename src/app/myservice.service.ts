import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  myProperty: any;
  constructor() { }

  getTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
