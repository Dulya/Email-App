import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DOCUMENT } from '@angular/platform-browser';
const URL = 'http://localhost:3000/api/sendemail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'My Email App';

  constructor(private http: Http, @Inject(DOCUMENT) private document){}
  email: string;
  email_subject:string;
  email_content:string;
  
    send(email: string) {
      //var attachment = (typeof req.body.attachment !="undefined") ? req.body.attachment : '';
      this.email=email;
      this.email_subject=this.document.getElementById('emailSubject').value ;
      this.email_content=this.document.getElementById('emailContent').value ;

      const mailData = {
        to: this.email,
        subject: this.email_subject,
        text: this.email_content,
        
      }
  
      this.http.post(URL, mailData).subscribe(
        (success) => {
          alert(success);   
        },
        (error) => {
          alert(error)
        }
      )
  
    }
  
    
}
