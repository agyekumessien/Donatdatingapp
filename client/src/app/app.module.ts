import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './_Layout/header/header.component';
import { FooterComponent } from './_Layout/footer/footer.component';
import { HomeComponent } from './_View/home/home.component';

import { NavbarComponent } from './_Layout/navbar/navbar.component';
import { JumbotronComponent } from './_Layout/jumbotron/jumbotron.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NavbarBottomComponent } from './_Layout/navbar-bottom/navbar-bottom.component';
import { FooterBottomComponent } from './_Layout/footer-bottom/footer-bottom.component';

//import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { HighchartsChartModule } from 'highcharts-angular';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatInputModule } from '@angular/material/input';

import { CookieService } from 'ngx-cookie-service';
import { NavbarTopComponent } from './_Layout/navbar-top/navbar-top.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },

  { path: 'navbartop', component: NavbarTopComponent },
  { path: 'navbarbottom', component: NavbarBottomComponent },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  //Languages
  { path: '**', component: HomeComponent }, //always at the end
];

//{path:'**',component:ErrorComponent},

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,

    NavbarComponent,
    JumbotronComponent,
    
    NavbarTopComponent,
    NavbarBottomComponent,
    FooterBottomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbModule,
    MatSidenavModule,
    MatPaginatorModule,

    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatInputModule,

    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
    FormsModule,
    ToastNoAnimationModule.forRoot(),
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      progressBar: true,
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
