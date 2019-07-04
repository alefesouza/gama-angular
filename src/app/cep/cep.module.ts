import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepComponent } from './cep/cep.component';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes = [
  { path: '', component: CepTextoComponent },
  { path: ':numero', component: CepComponent }
];

@NgModule({
  declarations: [
    CepComponent,
    CepTextoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CepModule { }
