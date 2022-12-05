import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {take} from "rxjs";
import {User} from "../interfaces/user.interface";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

  public loginUser(): void {
    this.authService.login("", "").pipe(take(1)).subscribe((user) => {
      localStorage.setItem('access-token', <string>user.headers.get('access-token'));
      localStorage.setItem('token-type', <string>user.headers.get('token-type'));
      localStorage.setItem('client', <string>user.headers.get('client'));
      localStorage.setItem('uid', <string>user.headers.get('uid'));
      localStorage.setItem('expiry', <string>user.headers.get('expiry'));
      localStorage.setItem('user', JSON.stringify(user.body));
    })
  }

}
