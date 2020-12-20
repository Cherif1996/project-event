import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  toRendez(){

    document.getElementById("rendez").scrollIntoView();
  }

  toGalerie(){
    document.getElementById("gallery").scrollIntoView();
    
  }

  toContact(){

    document.getElementById("contact").scrollIntoView();

   }

   toEvent(){

    document.getElementById("hotels").scrollIntoView();

  }

  toServe(){

    document.getElementById("buy-tickets").scrollIntoView();
  }

  toAbout(){

    document.getElementById("about").scrollIntoView();
  }

  toLogin(){

    document.getElementById("login").scrollIntoView();
  }

  toRegistre(){

    document.getElementById("registre").scrollIntoView();
  }
  toVenu(){

    document.getElementById("venue").scrollIntoView();
  }

}

