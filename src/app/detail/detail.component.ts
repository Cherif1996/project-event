import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {events} from '../soire';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  event;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.event=events[params.get ('id')]
    console.log(this.event);
});}


<<<<<<< HEAD
}
=======
}
>>>>>>> e5db9bc4852891dd6c1722121c5c1413bb48448c
