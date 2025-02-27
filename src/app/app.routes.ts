import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const routes: Routes = [
    {
        path : '', 
        children: [
            {path : '' , component: HomePageComponent} , 
            { path: 'addBook', component: AddBookComponent },
        ]
    }, 
    { path: 'edit/:id', component: EditBookComponent },
    { path: 'details/:id', component: BookDetailsComponent },
  
    {
        path : '**', component : PageNotFoundComponent
    }
];
