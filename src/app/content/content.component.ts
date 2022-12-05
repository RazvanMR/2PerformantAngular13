import { Component } from '@angular/core';
import {CategoryEnum} from "../enums/category.enum";

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public categoryEnum = CategoryEnum;
  public timestamp = new Date(Date.now()).toUTCString();
  public lifetime = 0;
  public expiry = new Date(parseInt(localStorage.getItem('expiry') as string) * 1000).toUTCString();
  public user = JSON.parse(localStorage.getItem('user') as string)?.user;
  public category: CategoryEnum = CategoryEnum.Progress;

  public selectCategory(category: CategoryEnum): void {
    this.category = category
    if(CategoryEnum.Cookie) {
      this.calculateLifetime();
    }
  }

  public calculateLifetime(): void {
    const actualDate = new Date(Date.now())
    const tokenExpireDate = new Date(parseInt(localStorage.getItem('expiry') as string) * 1000)
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate());
    const utc2 = Date.UTC(tokenExpireDate.getFullYear(), tokenExpireDate.getMonth(), tokenExpireDate.getDate());

    this.lifetime =  Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

}
