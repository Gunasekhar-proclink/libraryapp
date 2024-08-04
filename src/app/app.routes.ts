import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path : '', 
        children: [
            {path : '' , component: HomePageComponent} , 
        ]
    }, 
    {
        path : '**', component : PageNotFoundComponent
    }
];
