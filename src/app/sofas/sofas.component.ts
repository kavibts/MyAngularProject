import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sofas',
  templateUrl: './sofas.component.html',
  styleUrls: ['./sofas.component.css']
})
export class SofasComponent implements OnInit {

  constructor(private renderer:Renderer2) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }

  ngOnInit() {
  }

}
