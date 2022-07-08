declare var require: any

import { Component, OnInit } from '@angular/core';
const formulajs = require('@formulajs/formulajs') // require entire package

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssc';

  alpha = 0.05;
  power = 1;
  prevelance = 0.15;
  episinon = 0.2;
  result = 0;

  check()
  {
    let df = 1 - (this.alpha/2);
    let z = formulajs.NORMSINV(df);
    let q = 1 - this.prevelance;

    this.result = Math.ceil((z*z*q)/(this.episinon*this.episinon*this.prevelance));
  }

  ngOnInit(): void {

  }
}
