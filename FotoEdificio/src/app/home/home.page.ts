import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/classes/user/person';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario!: Person;

  constructor(private auth: AuthFirebaseService,private router:Router) { }

  ngOnInit(): void {
    // Lógica de inicialización, obtención de datos de usuario, etc.
    this.usuario = this.auth.userLogged
  }

  irACosasLindas() {
    this.router.navigateByUrl('cosas-lindas'); 
  }

  irACosasFeas() {
    this.router.navigateByUrl('cosas-feas'); 
  }

  irAMisFotos(){
    this.router.navigateByUrl('mis-fotos');
  }
}
