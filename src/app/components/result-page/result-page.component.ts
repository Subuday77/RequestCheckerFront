import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'app/models/response';
import { GetResultsService } from 'app/services/get-results.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  public response: Response;
  public isResponseExists = false;
  public responses: Observable<Response[]>;

  constructor(private getResults: GetResultsService, private router:Router) { }

  ngOnInit(): void {
    this.getResult();
  }

  getResult() {
    this.getResults.getResult().subscribe((result) => {
      this.response = result;

      if (this.response.remoteAddress != null || this.response.protocol != null || this.response.requestType != null) {
        this.isResponseExists = true;
        this.getAllResults();
      }
      if (!this.isResponseExists) {
        Swal.fire({
          title: 'Requests not found',
          text: 'Send request to the address above and push Refresh or reload the page',
          icon: 'info',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          confirmButtonColor: '#A9A9A9',

        })
      }
    });
  }
  getAllResults() {
    this.getResults.getAllResults().subscribe((result) => {
      this.responses = result;
      
    });

  }
  clear() {
    this.getResults.clear().subscribe(() => {
      this.isResponseExists = false;
    });
  }
  back(){
    this.router.navigate([''])
  }
}