import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  processNav = 'cataloge';

  constructor(private router: Router) {}

  
  hideForm() {
    this.router.navigate(['machines']);
  }

}
