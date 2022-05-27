import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  isAuthorized: boolean;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => this.isAuthorized = value)
  }

}
