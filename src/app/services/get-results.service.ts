import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetResultsService {

  constructor(private getResults: HttpClient) { }

  getResult(): Observable<any> {
    return this.getResults.get('https://request-checker2000.herokuapp.com/request/getresult');
  }
  getAllResults(): Observable<any> {
    return this.getResults.get('https://request-checker2000.herokuapp.com/request/getallresults');
  }
  clear(): Observable<any> {
    return this.getResults.get('https://request-checker2000.herokuapp.com/request/clear');
  }

  generateToken(data: string): Observable<any> {
    return this.getResults.post('https://request-checker2000.herokuapp.com/request/gettoken', data, { responseType: 'text' });
  }

  getResponseFromBo(integration: boolean, query: string, selectedDataset: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('access-control-allow-origin', '*');
    headers = headers.append('access-control-allow-origin', 'https://boint.tableslive.com/api/get/');
    headers = headers.append('Access-Control-Allow-Origin', 'https://boint.tableslive.com/api/get/');
    headers = headers.append("Access-Control-Allow-Origin", "*");
    headers = headers.append("Access-Control-Allow-Credentials", "true");
    headers = headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    headers = headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (integration) {
      console.log(query)
      if (selectedDataset === "round_details_url") {
        return this.getResults.post('https://boint.tableslive.com/api/get/', query, { headers, responseType: 'text' });
      } else {
        return this.getResults.post('https://boint.tableslive.com/api/get/', query, { headers });
      }
    } else {
      return this.getResults.post('https://sboapi.ezugi.com/get/', query, { headers });
    }
  }
}
