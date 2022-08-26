import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

	constructor(private loginService: LoginService, private router : Router) {
		if(localStorage.getItem('PortalAdminHasLoggedIn') == '') {
			this.loggedIn = false;
		} else {
			this.loggedIn = true;
		}
	}

	logout(){
		//this.loginService.logout().subscribe(
			//res => {
				//this.loggedIn=false;
			    //localStorage.setItem('PortalAdminHasLoggedIn', '');
				//localStorage.removeItem('PortalAdminHasLoggedIn');
			//},
			//err => console.log(err)
			//);
		this.loggedIn=false;
		//localStorage.setItem('PortalAdminHasLoggedIn', '');
		//localStorage.removeItem('PortalAdminHasLoggedIn');
		//localStorage.setItem('PortalAdminHasLoggedIn', '');
		localStorage.clear();
		localStorage.setItem('PortalAdminHasLoggedIn', '');
		//location.reload();
		this.router.navigate(['/login']);
	}

	getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {
  }

}
