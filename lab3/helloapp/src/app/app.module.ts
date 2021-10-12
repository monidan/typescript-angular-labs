import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CountEquation } from './equation.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ CountEquation ],
    bootstrap:    [ CountEquation ]
})
export class AppModule { }