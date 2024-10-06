
import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrls: ['./multiplicationtable.component.css']
})
export class MultiplicationtableComponent {
  number: number = 0;
  multiplicationTable: string[] = [];

  generateTable() {
    if (this.number !== null) {
      this.multiplicationTable = [];

      for (let i = 1; i <= 10; i++) {
        this.multiplicationTable.push(`${this.number} x ${i} = ${this.number * i}`);
      }
    }
  }
}
