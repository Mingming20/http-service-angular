import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-view-routing',
  templateUrl: './view-routing.component.html',
  styleUrls: ['./view-routing.component.css']
})
export class ViewRoutingComponent implements OnInit {
  public infoData: Array <any> = [];
  userid: number;

  constructor(
    private route: ActivatedRoute,
    private userData: HttpServiceService
  ) { }

  ngOnInit() {
    this.userid = this.route.snapshot.params['id'];

    this.userData.viewData(this.userid).subscribe((data) => {
      console.log(data)
      this.infoData.push(data)
    })
  }
}
