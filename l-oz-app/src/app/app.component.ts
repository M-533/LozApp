import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'loz-app';
  data: true;
  loz = true;
  logForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.logForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
  eIcon = true;
  pIcon = true;
  emailInput(): void {
    this.eIcon = false;
  }

  onPass() {
    this.pIcon = false;
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
