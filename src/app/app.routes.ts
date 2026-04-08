import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
        children: [
            {
                path: '',loadComponent: () => import('./features/home/home').then(m => m.Home)
            }
        ]
    }
];
