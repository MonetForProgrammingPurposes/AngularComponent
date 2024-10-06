
import { Component } from '@angular/core';

@Component({
  selector: 'app-unitconverter',
  templateUrl: './unitconverter.component.html',
  styleUrl: './unitconverter.component.css'
})
export class UnitconverterComponent {
  value: number = 0;
  convertedValue: number = 0;

  convertToKm() {
    this.convertedValue = this.value * 1.60934;
  }

  convertToMiles() {
    this.convertedValue = this.value / 1.60934;
  }

}
