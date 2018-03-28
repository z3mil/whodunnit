import { UserService } from './_services';
import { Component, OnInit } from '@angular/core';

import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{ 
    adminUser: any = {"firstName":"admin","lastName":"","username":"admin","password":"admin","id":"99"};
    unicornUser: any = {"firstName":"Bruce","lastName":"the unicorn","username":"unicorn","password":"123456","id":"98"};
   constructor(
        private userService: UserService) { }

    ngOnInit() {
        this.userService.create(this.adminUser);
        this.userService.create(this.unicornUser);

    }
}