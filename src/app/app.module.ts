import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ContadorComponent } from './contador/contador.component';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BoolPipe } from './bool.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: ListaTodosComponent },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'cep', component: CepTextoComponent },
  { path: 'cep/:numero', component: CepComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ContadorComponent,
    ContadorBotoesComponent,
    ListaTodosComponent,
    HomeComponent,
    CepComponent,
    CepTextoComponent,
    AddTodoComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
