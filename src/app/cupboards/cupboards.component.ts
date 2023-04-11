import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cupboards',
  templateUrl: './cupboards.component.html',
  styleUrls: ['./cupboards.component.css']
})
export class CupboardsComponent implements OnInit {

  constructor(private renderer:Renderer2) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }

  ngOnInit() {
  }

}
