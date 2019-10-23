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
    this.http.post(`http://api.kiworx.net/api/v1/login`,{'email': this.email, 'password': this.password}).subscribe(response =>{
    })
    window.location.assign('http://admin.kiworx.net/');
  }
}
