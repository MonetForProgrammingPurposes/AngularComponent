
import { Component } from '@angular/core';

@Component({
  selector: 'app-daysuntilbirthday',
  templateUrl: './daysuntilbirthday.component.html',
  styleUrl: './daysuntilbirthday.component.css'
})
export class DaysuntilbirthdayComponent {
  birthday: Date | null = null;
  daysLeft: number | null = null;

  calculateDays() {
    if (this.birthday) {
      const today = new Date();
      let nextBirthday = new Date(today.getFullYear(), new Date(this.birthday).getMonth(), new Date(this.birthday).getDate());

      if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
      }

      const differenceInTime = nextBirthday.getTime() - today.getTime();
      this.daysLeft = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    } else {
      this.daysLeft = null;
    }
  }

}
