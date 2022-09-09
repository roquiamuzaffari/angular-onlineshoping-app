import { Component } from '@angular/core';
import { CartService } from './service/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-loginpage';
  constructor(private cart:CartService) {
    //setTimeout(() => {
      //this.title = "changed title";
 //}, 2000);
}
}