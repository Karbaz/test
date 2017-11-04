import { UserService } from './../services/sample.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  providers: [UserService]
})
export class DashBoardComponent implements OnInit {
  constructor(private userService: UserService) {}
  data: any;
  ngOnInit() {
    this.userService.getUser().subscribe((value) => {
      this.data = value;
      console.log(this.data)
    });
  }

}
