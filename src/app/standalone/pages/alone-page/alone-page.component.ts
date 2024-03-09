import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';

@Component({
  selector: 'alone-page',
  standalone: true,
  imports: [
    //usar las directivas de angular
    CommonModule,
    CounterComponent
  ],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css'
})
export class AlonePageComponent {

}
