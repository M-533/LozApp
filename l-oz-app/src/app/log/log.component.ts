import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  loz = true;
  logForm: FormGroup;
  constructor(
    private faicon: FaIconLibrary,
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
