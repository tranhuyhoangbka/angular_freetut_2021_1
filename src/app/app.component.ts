import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
      div{
         margin: 0 auto;
         text-align: center;
      }
      .rotate{
          width: 340px;
          heigh: 82px;
         border:solid 1px red;
      }
   `],
   animations: [
        trigger('myanimation', [
            state('smaller', style({
                transform: 'translateY(100px)'
            })),
            state('larger', style({
                transform: 'translateY(0px)'
            })),
            transition('smaller <=> larger', animate('300ms ease-in'))
        ])
    ]
})
export class AppComponent {
  title = 'smart-note';
  todaydate1: any;
  propertyService: any;
  results: any;
  username: any;
  formdata: any;
  showFiller = false;
  constructor(private myservice: MyserviceService, private http: HttpClient) {}
  ngOnInit() {
    this.myservice.myProperty = "myProperty: App Component";
    this.propertyService = this.myservice.myProperty;
    this.todaydate1 = this.myservice.getTodayDate();
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
      console.log(data);
      this.results = data;
    });

    this.formdata = new FormGroup({
        username: new FormControl("Freetuts.net", Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ])),
        pwd: new FormControl("abcd1234", this.pwdLengthValidator())
    });
   }
  state: string = "smaller";
  animate() {
      this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }
  months = ["Tháng 1", "Tháng 2", "Tháng 3",
                "Tháng 4", "Tháng 5", "Tháng 6",
                "Tháng 7", "Tháng 8", "Tháng 9",
                "Tháng 10", "Tháng 11", "Tháng 12"];
  is_available = false;
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

  myClickFunction(event: any) {
    alert("Nhận được lệnh click từ button");
  }

  changemonths(event: any) {
    alert("Bạn vừa thay đổi tháng trong dropdown");
  }

  onClickSubmit(data: any) {
      alert("Username bạn vừa nhập là : " + data.username);
   }
   onClickSubmit2(data: any) {
      this.username = data.username;
   }
   pwdLengthValidator() {
      return (control: AbstractControl): ValidationErrors | null => {
        return control.value.length < 6 ? {pwdLength: {value: control.value}} : null
      };
    }
}
