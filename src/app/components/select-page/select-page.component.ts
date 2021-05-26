import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRPage(){
    this.router.navigate(['resultPage']);
  }

  navigateToBoPage(){
    this.router.navigate(['boApiRequestPage']);
  }
}
