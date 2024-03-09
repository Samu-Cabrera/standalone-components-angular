import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'alone',
        //cargar mediante lazyload
        loadComponent: () => import('./standalone/pages/alone-page/alone-page.component').then(m => m.AlonePageComponent)
    },
    {
        path: '**',
        redirectTo: 'alone'
    }
];
