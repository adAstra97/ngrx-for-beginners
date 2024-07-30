import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public counter = 0;
  public updateAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  public increase(): void {
    this.updateAt = Date.now();
    this.counter++;
  }

  public decrease(): void {
    this.updateAt = Date.now();
    this.counter--;
  }

  public clear(): void {
    this.updateAt = Date.now();
    this.counter = 0;
  }
}
