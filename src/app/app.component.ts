import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techMAsters_Angular';
  options: AnimationOptions = {
    path: './assets/lottie/globe.json',
  };
  options1: AnimationOptions = {
    path: './assets/lottie/contact.json',
  };
  options2: AnimationOptions = {
    path: './assets/lottie/contact2.json',
  };
  options3: AnimationOptions = {
    path: './assets/lottie/rocket.json',
  };
  options4: AnimationOptions = {
    path: './assets/lottie/bene.json',
  };
  options5: AnimationOptions = {
    path: './assets/lottie/about-anim.json',
  };


  ngOninit(): void {

  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
