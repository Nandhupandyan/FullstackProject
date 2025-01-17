// graph.component.ts
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  salary: number = 0;
  totalExpenses: number = 0;
  balance: number = 0;

  ngOnInit() {
    // Safely parse salary from localStorage
    this.salary = Number(localStorage.getItem('salary')) || 0;

    // Safely parse expenses from localStorage
    const storedExpenses = localStorage.getItem('expenses');
    const expenses: { [key: string]: number } = storedExpenses
      ? JSON.parse(storedExpenses)
      : {};

    // Calculate total expenses and balance (savings)
    this.totalExpenses = Object.values(expenses).reduce((acc: number, curr: number) => acc + curr, 0);
    this.balance = this.salary - this.totalExpenses;

    // Render the chart
    this.renderChart(expenses);
  }

  renderChart(expenses: { [key: string]: number }) {
    const ctx = document.getElementById('expenseChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(expenses), // Keys for labels (categories)
          datasets: [
            {
              label: 'Expenses',
              data: Object.values(expenses), // Values for the chart
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
      });
    } else {
      console.error('Canvas element not found!');
    }
  }
}
