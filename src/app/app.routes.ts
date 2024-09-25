import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component')
        .then(c => c.HomeComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./features/portfolio/portfolio.component')
        .then(c => c.PortfolioComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about.component')
        .then(c => c.AboutComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component')
        .then(c => c.ContactComponent)
    }
    
];
