import { Component, OnInit } from '@angular/core';
import {events} from '../soire';


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

eventlist=events;

  constructor() { }

  ngOnInit(): void {
  }

 

}