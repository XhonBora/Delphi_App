import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  darkMode = () => {
    document.getElementById('body').classList.toggle('ms-dark-theme');
  }
  quickbar = () => {
    document.getElementById('body').classList.toggle('ms-has-quickbar');
  }

  ngOnInit(): void {
  }

}
