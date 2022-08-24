import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl(),
    subject: new FormControl('portfolio message')
  });

  constructor(private http: HttpClient, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  onSubmit(): void{
    const body = new HttpParams()
    .set('form-name', 'contact-form')
    .append('name', this.contactGroup.value.name)
    .append('email', this.contactGroup.value.email)
    .append('subject', this.contactGroup.value.subject)
    .append('message', this.contactGroup.value.message)

    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert("Something went wrong when sending your message.");
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            this.router.navigateByUrl('success')
            this.contactGroup.value.name.setValue('')
            this.contactGroup.value.email.setValue('')
            this.contactGroup.value.subject.setValue('')
            this.contactGroup.value.message.setValue('')
          } else {
            this.router.navigateByUrl('failure')
            console.log('Error status: ' + err.status);
            console.log('Error body: ' + err.error);
          };
        };
      }
    );
  }

}
