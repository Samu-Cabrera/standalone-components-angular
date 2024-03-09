import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input()
  public counter: number = 0;

  incrementar(): void {
    this.counter++;
  }

  decrementar(): void {
    this.counter--;
  }

}
