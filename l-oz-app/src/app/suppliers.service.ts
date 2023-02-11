import { Injectable } from '@angular/core';
import { suppliersRow } from './resources/suppliers-list';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  constructor() {}

  supliesDate = [
    new suppliersRow('name', 'pure', 'ffg18', 'M200533', new Date()),
    new suppliersRow('name', 'pure', 'ffg18', 'M200533', new Date()),
    new suppliersRow('name', 'pure', 'ffg18', 'M200533', new Date()),
    new suppliersRow('name', 'pure', 'ffg18', 'M200533', new Date()),
  ];
}
