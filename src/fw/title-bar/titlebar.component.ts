import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'fw-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService) { }


  ngOnInit() {
  }

}
