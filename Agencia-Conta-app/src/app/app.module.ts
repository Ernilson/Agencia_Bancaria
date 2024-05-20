import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente.service';
import { TransacaoComponent } from './transacao/transacao.component';
import { TransacaoService } from './transacao.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    TransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,   
    MatSnackBarModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [
    ClienteService,
    TransacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
