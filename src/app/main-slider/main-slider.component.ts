import { Component, OnInit } from '@angular/core';
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {
  arr = ['CREA','REVOLUCIONA','DESAFÍA','CAMBIA','HAZ','HISTORIA'];
  index = 0;
  keyWord = 'CREA';
  subscription: Subscription;
  statusText: string;

  constructor() { }

  ngOnInit() {
    const source = interval(700);
    this.subscription = source.subscribe(val => this.setNextWord());
  }


  setNextWord() {
    this.keyWord = this.arr[this.index++];
    if (this.index == 5) this.index = 0;
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
}


}
