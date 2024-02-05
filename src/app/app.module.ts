import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZitateArrayComponent } from './zitate-array/zitate-array.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PopupNewNameComponent } from './popup-new-name/popup-new-name.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ScrollPanelModule } from 'primeng/scrollpanel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SettingsDialogComponent,
    ZitateArrayComponent,
    DropdownComponent,
    PopupNewNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ScrollPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
