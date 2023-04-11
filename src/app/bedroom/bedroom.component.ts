import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  constructor(private renderer:Renderer2) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
   }

  ngOnInit() {
  }

}
