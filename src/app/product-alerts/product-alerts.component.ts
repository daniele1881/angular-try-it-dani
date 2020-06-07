import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() 
  inputProduct; //campo ricevuto in input
  @Output() 
  outputEventEmitter = new EventEmitter(); //campo che invia un evento in output
  
  constructor() {}

  ngOnInit() {}
}
