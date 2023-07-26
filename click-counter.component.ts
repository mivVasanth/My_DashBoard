import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent {

public clickCount = 0;

handleClick(){

  this.clickCount++;

}

getClickCount(){
  return this.clickCount;

  console.log('clickCount' ,this.clickCount)
}


}
