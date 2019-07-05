import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.email, this.senha, this.confirmarSenha);

    if (this.senha !== this.confirmarSenha) {
      alert('Senhas não coincidem');
      return;
    }

    this.authService.createAccount(this.email, this.senha)
      .subscribe((value: any) => {
        alert('Usuário criado com sucesso');
        console.log(value);
        localStorage.setItem('token', value.idToken);

        this.authService.setUser({
          id: value.localId,
          email: value.email,
        });
      });
  }

}
