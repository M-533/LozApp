import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SuppliersService } from 'app/suppliers.service';
import { suppliersRow } from '../suppliers-list';
@Component({
  selector: 'app-rs-form',
  templateUrl: './rs-form.component.html',
  styleUrls: ['./rs-form.component.scss'],
})
export class RsFormComponent {
  processNav = 'cataloge';

  constructor(private router: Router, private subService: SuppliersService) {}

  suppliesForm = new FormGroup({
    materialName: new FormControl('', [Validators.required]),
    category: new FormControl('', Validators.required),
    itemCode: new FormControl('', Validators.required),
    supplierCode: new FormControl('', Validators.required),
  });

  addNew() {
    this.subService.supliesDate.push(
      new suppliersRow(
        this.suppliesForm.value.materialName,
        this.suppliesForm.value.category,
        this.suppliesForm.value.itemCode,
        this.suppliesForm.value.supplierCode,
        new Date()
      )
    );
    this.router.navigate(['resources']);
  }

  

  closeForm() {
    this.router.navigate(['resources']);
  }
}
