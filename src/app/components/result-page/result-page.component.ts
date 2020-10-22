import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response';
import { GetResultsService } from 'src/app/services/get-results.service';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  public response: Response;
  public isResponseExists = false;

  constructor(private getResults: GetResultsService) { }

  ngOnInit(): void {

  }

  getResult() {
    this.getResults.getResult().subscribe((result) => {
      this.response = result;
      this.isResponseExists = true;

    });

  }
}