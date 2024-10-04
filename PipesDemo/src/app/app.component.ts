import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesDemo';

  amount=60;

  num=123.89;

  student:any={
    name:'kj',
    age:23,
  };

  birthDate:any;

  genderMapping={
    "male":"Mr.",
    "female":"Ms.",
    "other":"NA",
  };

  gender='other'
}
