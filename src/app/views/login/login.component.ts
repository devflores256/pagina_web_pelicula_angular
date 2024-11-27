import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { HelperServiceService } from '../../services/helper.service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private helper: HelperServiceService){}

  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === '') {
      this.helper.sweetalert('¡Un momento!','Debes ingresar el Correo Electrónico','info');
    } else if (!regex.test(email)) {
      this.helper.sweetalert('¡Un momento!','El formato del Correo Electrónico ingresado es inválido','info');
    } else if (password === '') {
      this.helper.sweetalert('¡Un momento!','Debes ingresar la Contraseña','info');
    } else {
      this.loginService.login(email, password);
    }

  }

}
