import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: any) {
    this.router.navigateByUrl('/home');
  }
}
