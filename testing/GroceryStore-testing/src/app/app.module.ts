import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ListeditComponent } from './shoppinglist/listedit/listedit.component';
import { GroceryComponent } from './grocery/grocery.component';
import { GrocerydetailsComponent } from './grocery/grocerydetails/grocerydetails.component';
import { GrocerylistComponent } from './grocery/grocerylist/grocerylist.component';
import { GroceryitemComponent } from './grocery/grocerylist/groceryitem/groceryitem.component';
import { HeaderComponent } from './header/header.component';
import { StyletoggleDirective } from './header/styletoggle/styletoggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ListeditComponent,
    GroceryComponent,
    GrocerydetailsComponent,
    GrocerylistComponent,
    GroceryitemComponent,
    HeaderComponent,
    StyletoggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
