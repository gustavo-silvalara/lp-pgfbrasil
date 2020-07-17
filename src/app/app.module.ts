import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { RowComponent } from './components/row/row.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CabecalhoComponent,
    TabsComponent,
    RowComponent,
    QuemSomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
