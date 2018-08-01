import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../usersdata.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ef-details',
  templateUrl: './ef-details.component.html',
  styleUrls: ['./ef-details.component.css']
})
export class EfDetailsComponent implements OnInit {

  public user: Object;

  constructor(private data: UsersdataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.user = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user).subscribe(
      data => this.user = data
    )

  }

}
