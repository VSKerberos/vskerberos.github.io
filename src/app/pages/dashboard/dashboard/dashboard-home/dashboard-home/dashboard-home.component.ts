import { Component, OnInit } from '@angular/core';
import { FireBaseService } from 'src/app/core/services/fire-base.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;

  constructor(    private firebaseService: FireBaseService, ) { }

  ngOnInit(): void {
    

    
  }
}
