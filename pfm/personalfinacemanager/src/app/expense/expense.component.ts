import { Component } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  currentDate: string;

  constructor() {
    // Initialize the current date
    this.currentDate = new Date().toLocaleDateString();
  }

  // Placeholder for updateAmount logic, in case needed later
  updateAmount(index: number, value: string) {
    console.log(`Item at index ${index} updated with value: ${value}`);
  }
}
