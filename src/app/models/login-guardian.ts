import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})

export class loginGuardian implements CanActivate {
    
    constructor(private loginService: LoginService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.isLogged()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

}