import {Component, OnInit} from '@angular/core';
import {ErrorMessage} from "../../model";
import {ErrorMessageService} from "../../service/error-message.service";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  errorMessages: ErrorMessage[] | undefined;

  constructor(private errorMessageService: ErrorMessageService) {
  }

  ngOnInit(): void {
    this.errorMessageService.readAll(
    ).subscribe(response => {
        this.errorMessages = response;
      }, (error: any) => {
        alert(error.error)
      }
    )
  }

}
