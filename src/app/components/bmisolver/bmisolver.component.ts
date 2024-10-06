
import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  weight: number | null = null;
  height: number | null = null;
  bmi: number | null = null;
  bmiCategory: string = '';

  calculateBMI() {
    if (this.weight !== null && this.height !== null && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.bmiCategory = this.getBMICategory(this.bmi);
    } else {
      this.bmi = null;
      this.bmiCategory = '';
    }
  }

  getBMICategory(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }

}
