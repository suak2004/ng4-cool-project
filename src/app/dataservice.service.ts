import { Injectable } from '@angular/core';

@Injectable()

export class DataserviceService {

  constructor() { }
  cars = [
    'Ford' , 'Toyota', 'Honda'
  ];

  myData() {
    return 'This is my data, man!';
  }
}
