import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1';

  selectedNumber: number=1;

  multiplicationTable: number[] = []; 

  generateTable(): void {
    this.multiplicationTable = []; 
    for (let i = 1; i <= 10; i++) {
      this.multiplicationTable.push(this.selectedNumber * i);
    }
  }
}

