import { Component, OnInit } from '@angular/core';
import { Ability } from '@casl/ability';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private ability: Ability) {
    this.ability.update([{ actions: 'manage', subject: 'AdminStuff' }]);
  }

  ngOnInit() {
  }

}
