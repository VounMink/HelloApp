import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SystemInterface } from './system_interface/system_interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SystemInterface],
  template: `
    <div class="a_huge_block">
      <system-interface></system-interface>
    </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Прототип системы учета вычислительной техники';
}
