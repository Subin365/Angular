import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ListeditComponent } from './shoppinglist/listedit/listedit.component';
import { GroceryComponent } from './grocery/grocery.component';
import { GrocerydetailsComponent } from './grocery/grocerydetails/grocerydetails.component';
import { GrocerylistComponent } from './grocery/grocerylist/grocerylist.component';
import { GroceryitemComponent } from './grocery/grocerylist/groceryitem/groceryitem.component';
import { HeaderComponent } from './header/header.component';
import { StyletoggleDirective } from './header/styletoggle/styletoggle.directive';
import { ShoppingService } from './shoppinglist/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { GrocerystartComponent } from './grocery/grocerystart/grocerystart.component';
import { GroceryEditComponent } from './grocery/grocery-edit/grocery-edit.component';
import { GroceryService } from './grocery/grocey.service';

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
    StyletoggleDirective,
    GrocerystartComponent,
    GroceryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ShoppingService,GroceryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
