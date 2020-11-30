import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
// @Input('srvElement')//assign alias 
// element: {type: string, name: string, content: string, email: string, date: number}
  
constructor(private readonly router: Router, private readonly route: ActivatedRoute){

}
  ngOnInit(): void {
    // console.log(this.route.snapshot)
  }

}
