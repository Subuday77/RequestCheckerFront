import { XmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataRequest } from 'app/models/data-request';
import { DataSet } from 'app/models/data-set';
import { Filter } from 'app/models/filter';
import { GetResultsService } from 'app/services/get-results.service';
import { NgxSpinnerService } from 'ngx-spinner';
// import { DataRequest } from 'src/app/models/data-request';
// import { DataSet } from 'src/app/models/data-set';
// import { Filter } from 'src/app/models/filter';
// import { GetResultsService } from 'src/app/services/get-results.service';
// import * as txml from 'txml';
import Swal from 'sweetalert2';
import { Parser } from 'xml2js';


@Component({
  selector: 'app-bo-api-request-page',
  templateUrl: './bo-api-request-page.component.html',
  styleUrls: ['./bo-api-request-page.component.css']
})
export class BoApiRequestPageComponent implements OnInit {

  constructor(private router: Router, private getResults: GetResultsService, private spinner: NgxSpinnerService) { }

  allDataSets = ["game_rounds", "game_round_details", "per_round_report", "cancelled_rounds", "all_players", "new_players",
    "logged_players", "active_players", "blocked_players", "operators_total_win_bet", "operators_total_tips", "revenue_by_game_type",
    "error_codes", "bet_types", "currencies", "conversion_rates", "round_status", "game_types", "open_tables", "multi",
    "user_round_details", "round_video", "round_details_url"
  ]
  selectedDataSet = "Click to select DataSet";
  apiAccess: string;
  apiid: string;
  apiUser: string;
  dataSet: DataSet = {} as DataSet;
  dataRequest: DataRequest = {} as DataRequest;
  handle;
  secondsCounter: number;

  ngOnInit(): void {
    this.allDataSets.sort();
  }

  prepareDataSet() {
    console.log(this.selectedDataSet)
    var filters = this.prepareFilters(this.selectedDataSet);
    this.dataSet = new DataSet(this.selectedDataSet, filters);
    this.dataRequest.toApplyEncoding = undefined;
    this.dataRequest.token = undefined;
    this.dataRequest.query = undefined;
    console.log(this.dataSet)
  }

  prepareFilters(selectedDataset: string): Filter[] {
    let filtersToAdd: Filter[] = [];
    switch (selectedDataset) {
      case "game_rounds":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "RoundID", "TableID", "DealerID", "UID", "GameType", "Limit", "Page"];
        filterNames.forEach((filter, index) => {
          filtersToAdd.push(new Filter(filter, undefined));
          if (filter === "UID") {
            filtersToAdd[index].mandatory = true;
            filtersToAdd[index].inUse = true;
          }
        });
        break;
      case "game_round_details":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "RoundID", "TableID", "DealerID", "UID", "GameType", "Limit", "Page"];
        filterNames.forEach((filter, index) => {
          filtersToAdd.push(new Filter(filter, undefined));
          if (filter === "TableID") {
            filtersToAdd[index].mandatory = true;
            filtersToAdd[index].inUse = true;
          }
        });
        break;
      case "per_round_report":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "Currency", "RoundID", "TableID", "DealerID", "UID", "GameType", "Limit", "Page"];
        filterNames.forEach((filter, index) => {
          filtersToAdd.push(new Filter(filter, undefined));
          if (filter === "StartTime" || filter === "EndTime") {
            filtersToAdd[index].mandatory = true;
            filtersToAdd[index].inUse = true;
          }
        });
        break;
      case "cancelled_rounds":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "RoundID", "TableID", "DealerID", "UID", "GameType", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "all_players":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "UID", "GameType", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "new_players":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "UID", "GameType", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "logged_players":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "UID", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "active_players":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "UID", "GameType", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "blocked_players":
        var filterNames = ["OperatorID", "UID", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "operators_total_win_bet":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "Currency", "BetTypeID", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "operators_total_tips":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "Currency", "BetTypeID", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "revenue_by_game_type":
        var filterNames = ["OperatorID", "TimePeriod", "StartTime", "EndTime", "Currency", "TableID", "Limit", "Page"];
        filterNames.forEach(filter => {
          filtersToAdd.push(new Filter(filter, undefined));
        });
        break;
      case "user_round_details":
        var filterNames = ["OperatorID", "RoundID", "TransactionID", "UID", "language"];
        filterNames.forEach((filter, index) => {
          filtersToAdd.push(new Filter(filter, undefined));
          if (filter === "RoundID" || filter === "TransactionID" || filter === "UID" || filter === "OperatorID") {
            filtersToAdd[index].mandatory = true;
            filtersToAdd[index].inUse = true;
          }
        });
        break;
      case "round_video":
        var filterNames = ["RoundID"];
        filterNames.forEach((filter, index) => {
          filtersToAdd.push(new Filter(filter, undefined));
          if (filter === "RoundID") {
            filtersToAdd[index].mandatory = true;
            filtersToAdd[index].inUse = true;
          }
        });
        break;
      case "round_details_url":
        var filterNames = ["OperatorID", "RoundID", "UID", "TableID"];
        filterNames.forEach((filter, index) => {
          filtersToAdd.push(new Filter(filter, undefined));
          if (filter === "RoundID" || filter === "OperatorID") {
            filtersToAdd[index].mandatory = true;
            filtersToAdd[index].inUse = true;
          }
        });
        break;
      default:
        break;
    }
    return filtersToAdd;
  }
  async prepareRequest() {
    if (this.apiAccess === undefined || this.apiid === undefined || this.apiUser === undefined || this.apiAccess === "" || this.apiid === "" || this.apiUser === "") {
      this.errorUserInfo();
    } else {
      if (this.checkMandatoryValues()) {
        var toApplyEncoding = this.apiAccess + "DataSet=" + this.selectedDataSet + "&APIID=" + this.apiid + "&APIUser=" + this.apiUser;

        this.dataSet.filters.forEach(filter => {
          if (filter.inUse) {
            toApplyEncoding = toApplyEncoding.concat("&" + filter.name + "=" + filter.value);
          }
        });
        var token = await this.generateToken(toApplyEncoding);
        var query = toApplyEncoding.split(this.apiAccess)[1] + "&RequestToken=" + token;
        this.dataRequest = new DataRequest(this.apiAccess, this.apiid, this.apiUser, toApplyEncoding, token, query);
      } else {
        this.errorMandatoryData();
      }
    }
  }

  sendRequest() {
    this.spinner.show();
    this.secondsCounter = 0.0;
    this.handle = setInterval(() => {
      var temp = (this.secondsCounter + 0.1).toFixed(1);
      this.secondsCounter = Number.parseFloat(temp);
    }, 100);
    this.getResults.getResponseFromBo(this.dataRequest.integration, this.dataRequest.query, this.selectedDataSet).subscribe((result) => {
      console.log(result);
      this.spinner.hide();
      clearInterval(this.handle);
      if (result.Error != undefined) {
        Swal.fire({
          title: result.Error,
          html: `<p><b>Error code: ` + result.ErrorCode + `</b><br>` + result.Details + `</p>`,
          footer: `<p>LogID: ` + result.LogID + `</p>`,
          icon: "error"
        })
      } else {
        if (typeof (result) === 'string') {
          this.parseXml(result);
          // Swal.fire({
          //   html: `<p style="text-align: left; font-size: 120%"><Strong>Done in ` + this.secondsCounter + ` seconds.<br>More details in browser's console.</Strong><br></p>
          //    <p style="text-align: left;">` + result + `</p>`,
          //   width: 1200
          // });
        } else {
          Swal.fire({
            html: `<p style="text-align: left; font-size: 120%"><Strong>Done in ` + this.secondsCounter + ` seconds.<br>Data type: JSON<br>More details in browser's console.</Strong><br></p>
         <p style="text-align: left;">` + JSON.stringify(result.data) + `</p>`,
            width: 1200
          });
        }
      }
    }, (error) => {
      console.log(error);
      this.spinner.hide();
      clearInterval(this.handle);
      if (error.status > 200) {
        Swal.fire({
          text: "HTML error " + error.status,
          icon: "error"
        });
      } else {
        if (error.error.text != undefined) {
          Swal.fire({
            html: `<p style="text-align: left; font-size: 120%"><Strong>Done in ` + this.secondsCounter + ` seconds.<br>Data type: XML/Text<br>More details in browser's console.</Strong><br></p>
         <p style="text-align: left;">` + error.error.text + `</p>`,
            width: 1200
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Undefined error<br>Probably CORS issue."
          });
        }
      }
    });
  }

  parseXml(xmlStr) {
    // const txml = require('txml');
    var result;
    var error;
    var parser = require('xml2js');
    parser.Parser().parseString(xmlStr, (e, r) => { result = r, error = e });
    Swal.fire({
      html: `<p style="text-align: left; font-size: 120%"><Strong>Done in ` + this.secondsCounter + ` seconds.<br>Data type: XML<br>More details in browser's console.</Strong><br></p>
   <p style="text-align: left;">` + JSON.stringify(result) + `</p>`,
      width: 1200
    });
    // console.log(result)
    // console.log(error)    
  }

  async generateToken(toApplyEncoding: string): Promise<string> {
    const observable = this.getResults.generateToken(toApplyEncoding);
    observable.subscribe(() => {

    });
    return observable.toPromise();
  }


  clear() {
    this.selectedDataSet = "Click to select DataSet";
    this.dataSet = undefined;
    this.dataRequest.toApplyEncoding = undefined;
    this.dataRequest.token = undefined;
    this.dataRequest.query = undefined;
    this.apiAccess = undefined;
    this.apiid = undefined;
    this.apiUser = undefined;
  }

  back() {
    this.router.navigate([''])
  }
  check(filter: Filter) {
    if (filter.mandatory) {
      this.errorMandatoryFilter();
      filter.inUse = true;
    } else {
      filter.inUse = filter.inUse ? false : true;
    }
  }
  changeServer() {
    this.dataRequest.integration = this.dataRequest.integration ? false : true;
  }

  checkMandatoryValues(): boolean {
    var res = true;
    this.dataSet.filters.forEach(filter => {
      if (filter.mandatory && (filter.value === undefined || filter.value === "")) {
        res = false;
      }
    });
    return res;
  }

  errorMandatoryFilter() {
    Swal.fire({
      title: `<p style="color:wheat; font-size:150%;">Can't Touch This!</p>`,
      background: 'red',
      toast: true,
      position: "center",
      icon: 'error',
      showConfirmButton: false,
      timer: 3000,
      width: 300

    });
  }

  errorUserInfo() {
    Swal.fire({
      title: `<p style="color:wheat; -webkit-text-stroke: 2px rgb(0, 0, 0); font-size:150%;">User info is missing!</p>`
    });
  } errorMandatoryData() {
    Swal.fire({
      title: `<p style="color:wheat; -webkit-text-stroke: 2px rgb(0, 0, 0); font-size:150%;">Mandatory data not filled!</p>`
    });
  }
}
