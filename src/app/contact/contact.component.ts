import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public name:string;
  public email:string;
  public message:string;
  public contact:Contact;
  public isSend : boolean = false;
   constructor( private _contactService : ContactService) { }

  ngOnInit(): void {
  }



  submitMessage(){
    this.contact = new Contact(this.name,this.email,this.message);
    this._contactService.send(this.contact).subscribe(
      (data)=>{
        console.log(data);
        this.name = "";
        this.email = "";
        this.message = "";
        this.isSend=true;
       }
    ),
    err=>{
      console.error("Error");
    }
   }

}
