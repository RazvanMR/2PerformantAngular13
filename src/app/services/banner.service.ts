import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../environment/environment";
import {User} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  public getBanners(email: string, password: string): Observable<HttpResponse<User>> {
    return this.http.post<HttpResponse<User>>(`${environment.url}/affiliate/banners`, { user: {email, password} }, {observe: 'response' as 'body'})}

}
