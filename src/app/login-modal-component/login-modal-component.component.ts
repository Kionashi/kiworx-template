import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-modal-component',
  templateUrl: './login-modal-component.component.html',
  styleUrls: ['./login-modal-component.component.css']
})
export class LoginModalComponentComponent implements OnInit {
  email : string;
  password : string; 
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post(`http://localhost:8000/api/v1/login`,{'email': this.email, 'password': this.password}).subscribe(response =>{
    })
    window.location.assign('http://127.0.0.1:8000/');
  }
}
