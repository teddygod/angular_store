import { ErrorService } from './../../services/error.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-globar-error',
  templateUrl: './globar-error.component.html',
  styleUrls: ['./globar-error.component.scss']
})
export class GlobarErrorComponent {

  constructor(public errorService: ErrorService) {}

}
