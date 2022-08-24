import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  typeSelected: string;

  constructor(private spinnerService: NgxSpinnerService) {
    this.typeSelected = 'ball-fussion';
  }

  public showSpinner(): void {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000); // 5 seconds
  }
}
