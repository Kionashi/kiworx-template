import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-in-modal-component',
  templateUrl: './sign-in-modal-component.component.html',
  styleUrls: ['./sign-in-modal-component.component.css']
})
export class SignInModalComponentComponent implements OnInit {
  email : string;
  name : string; 
  password : string; 
  passwordConfirmation : string; 
  type : string = '';
  message : string = ''; 
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.password != this.passwordConfirmation){
      this.password = '';
      this.passwordConfirmation = '';
      this.message = "La contraseña y su confirmación no coinciden";
    }else{
      let body = {
        'email': this.email,
        'name': this.name,
        'password': this.password,
        'type': this.type,
      };
  
      this.http.post(`http://localhost:8000/api/v1/sign-in`,body).subscribe(response =>{
      })
      this.message = 'Gracias por suscribirte!';
    }
  }

  setEmployer(){
    this.type = 'Employer'; 
  }

  setCandidate(){
    this.type = 'Candidate'; 
  }

}
