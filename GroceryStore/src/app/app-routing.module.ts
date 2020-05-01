import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { GroceryComponent } from './grocery/grocery.component';
import { GrocerystartComponent } from './grocery/grocerystart/grocerystart.component';
import { GrocerydetailsComponent } from './grocery/grocerydetails/grocerydetails.component';
import { GroceryEditComponent } from './grocery/grocery-edit/grocery-edit.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/grocery', pathMatch: 'full' },
    {
        path: 'grocery', component: GroceryComponent,
        children: [
            { path: '', component: GrocerystartComponent },
            { path: 'new', component: GroceryEditComponent },
            { path: ':id', component: GrocerydetailsComponent },
            { path: ':id/edit', component: GroceryEditComponent },
        ]
    },
    { path: 'shopping-list', component: ShoppinglistComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}
)

export class AppRoutingModule {

}