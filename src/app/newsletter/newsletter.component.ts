import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  
  email : string = '';
  message : string = ''; 
  constructor(
    private http: HttpClient
    ) { }
  
  ngOnInit() {
  }

  onSubmit() {
    if(this.email != ''){
      this.http.post(`http://api.kiworx.net/api/v1/newsletters`,{'email': this.email}).subscribe(response =>{
      })
      this.message = 'Gracias por suscribirte!';
    }
  }
}
