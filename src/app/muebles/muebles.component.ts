import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-muebles',
  templateUrl: './muebles.component.html',
  styleUrls: ['./muebles.component.css']
})
export class MueblesComponent implements OnInit {

  constructor(private renderer:Renderer2) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }

  ngOnInit() {
  }

}
