import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
  date = '';
  money:number = 0;
  height:number = 0;
  miles:number = 0;


  lessons = {
    name: 'Math',
    subject: 'NaturalNumber',
    currentPoint: 65
  }


  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }
  onNameChange(value: string){
    this.name = value;
  }
  onDateChange(value: string){
    this.date = value;
  }
  onMoneyChange(value: string){
    this.money = parseFloat(value);
  }
  onHeightChange(value: string){
    this.height = parseFloat(value);
  }

}
