import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-lr',
  templateUrl: './lr.component.html',
  styleUrls: ['./lr.component.css']
})
export class LrComponent implements OnInit {

  constructor(private renderer:Renderer2) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }

  ngOnInit() {
  }

}
