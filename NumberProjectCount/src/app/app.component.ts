import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NumberProjectCount';

  dataInput1: number
  dataInput2: number
  dataInput3: number
  dataInput4: number
  dataInput5: number
  highAlpha: number
 


  aCount: number
  Avg = 0;
  sum = 0;
  num1; num2 = 0;
  reverseLetter: string

  //counter() {
  //for (var i = 0; i < this.dataInput1.length; i++) {
  //if (this.dataInput1.charAt(i) == "a") {
  //this.aCount = this.aCount + 1
  //}
  //}


Avarage(){
  this.Avg = +this.dataInput1 + +this.dataInput2 + +this.dataInput3 + +this.dataInput4 + +this.dataInput5
  this.Avg = this.Avg/5
}

Highest(){
  if (this.dataInput1 > this.dataInput2 && this.dataInput1 > this.dataInput3 && this.dataInput1 > this.dataInput4 && this.dataInput1 > this.dataInput5){
    this.highAlpha = this.dataInput1;
  }
    else if
    (this.dataInput2 > this.dataInput1 && this.dataInput2 > this.dataInput3 && this.dataInput2 > this.dataInput4 && this.dataInput2 > this.dataInput5){
      this.highAlpha = this.dataInput2;
    }
    else if
    (this.dataInput3 > this.dataInput1 && this.dataInput3 > this.dataInput2 && this.dataInput3 > this.dataInput4 && this.dataInput3 > this.dataInput5){
      this.highAlpha = this.dataInput3;
    }
    else if
    (this.dataInput4 > this.dataInput1 && this.dataInput4 > this.dataInput2 && this.dataInput4 > this.dataInput3 && this.dataInput4 > this.dataInput5){
      this.highAlpha = this.dataInput4;
    }
    else if
    (this.dataInput5 > this.dataInput1 && this.dataInput5 > this.dataInput2 && this.dataInput5 > this.dataInput3 && this.dataInput5 > this.dataInput4){
      this.highAlpha = this.dataInput5;
    }
}

Sum(){
  this.sum = this.dataInput1 + this.dataInput2 + this.dataInput3 + this.dataInput4 + this.dataInput5
this.sum = this.sum;
}
ReverseLetter(){

}

}
