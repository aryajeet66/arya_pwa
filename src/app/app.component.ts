import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //var dec.
  public showMyMessage = false
  public msg:string = "Hello...."
  title = 'bajaj-pwa';
  //fun dec.
  callMsg(){
    console.log("clicked")
    setTimeout(() => {
      this.showMyMessage = true;
  }, 3000);
  }
}

