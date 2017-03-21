import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from "./app.component";
import {componentService} from "./app.component.service";
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [componentService]
})
export class AppModule {}