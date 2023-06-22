import { Component, EventEmitter, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //userdefined event creation
  //@output to share data from child to parent 
  @Output()onMenuBtnClick=new EventEmitter()
  Highcharts=Highcharts
  



  menubtnClicked(){
    //to occure an userdefined event
  this.onMenuBtnClick.emit()
  }
}
