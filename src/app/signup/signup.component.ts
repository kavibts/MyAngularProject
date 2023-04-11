import { Component, OnInit ,Renderer2} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router,private renderer:Renderer2) { 
    this.renderer.setStyle(document.body,'background-color','#FEA3AA');
    
  }
  

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      cpassword:['',Validators.required]
    })
  }
 signUp(){
  this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
  .subscribe(res=>{
    alert("Registered successfully");
    this.signupForm.reset();
    this.router.navigate(['login']);
  },err=>{
    alert(['something went wrong'])
  })
 }
}
