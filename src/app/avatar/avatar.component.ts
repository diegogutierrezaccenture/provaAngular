import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `<img
                  class="avatar"
                  [src]="userInfo.img"
                  [ngStyle]="{'border': userInfo.role === 'admin' ? '2px solid red': '2px solid yellow'}"
                  >`,
  styles: [
    `.avatar {height : 50px; width: 50px; border-radius: 50%;}`
  ]
})
export class AvatarComponent {

  @Input() userInfo: any;
}
