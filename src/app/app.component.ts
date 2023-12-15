import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './header/header.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    alert("Web iniciada!")
  }
  title = 'Prova';
}