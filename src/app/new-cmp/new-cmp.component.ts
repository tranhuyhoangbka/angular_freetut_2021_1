import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.scss']
})
export class NewCmpComponent implements OnInit {
  todos = ["Hoc Typescript", "hoc Angular 4", "hoc HTML5"];
  todaydate: any;
  propertyService: any;

  constructor(private myservice: MyserviceService) {}

  ngOnInit(): void {
    this.todaydate = this.myservice.getTodayDate();
    this.myservice.myProperty = "myProperty: New Cmp Component";
    this.propertyService = this.myservice.myProperty;
  }

}
