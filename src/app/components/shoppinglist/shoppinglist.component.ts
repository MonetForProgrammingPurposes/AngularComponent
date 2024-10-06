import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  newItem: string = '';
  items: string[] = [];

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = ''; // Clear input field after adding
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1); // Remove item at the specified index
  }

}