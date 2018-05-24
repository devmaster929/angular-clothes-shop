import { Component, OnInit, OnDestroy } from "@angular/core";
import { IUserLoginDTO } from "../../../model/dto/userLogin.dto";
import { UserService } from "../../../services/user.service";
import { IUser } from "../../../model/user.interface";
import { Location } from "@angular/common";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    keepMeLoggedIn: boolean = false;

    userLoginDTO: IUserLoginDTO = {};

    constructor(private _user: UserService, private _location: Location) {

    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    toggleKeep() {
        this.keepMeLoggedIn = !this.keepMeLoggedIn;
    }

    login() {
        if (this._user.login(this.userLoginDTO, this.keepMeLoggedIn) != null) {
            this._location.back();
            // change route with logged user
        } else {

        }
    }
}