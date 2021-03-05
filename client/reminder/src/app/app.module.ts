import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListItemComponent } from './components/list-item/list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    SidebarComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
