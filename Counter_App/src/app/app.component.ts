import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Counter';
  count = 0;


  increase()
  {
    this.count ++;
  }

  decrease()
  {
    this.count --;
    if(this.count < 0)
      this.count = 0;
  }

  resetbutton()
  {
    this.count = 0;
  }
}
