import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DataBindingDemo';
  ////1.interpolation
  num:any=10;

  obj={
    "name":"xyz"
  }

  arr=[1,2,3,4,5]

  isValid=true;

  ///2.prpperty binding

  value1=20;

  wantToDisable=false;

  /////3.event binding

  ClickMe(){
    const a=10;
    const b=20;
    console.log("a+b")
  }

  mouseOver() {
    alert("mouseOver")
    }

    ///4.two way data binding
    myval=0;
}
