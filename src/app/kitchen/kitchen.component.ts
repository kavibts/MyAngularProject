import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  constructor(private renderer:Renderer2) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }
  ngOnInit() {
  }

}
