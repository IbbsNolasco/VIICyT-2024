import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            { path: 'dashboard', loadComponent: () => import('./views/dashboard/dashboard.component') },
            { path: 'temperature', loadComponent: () => import('./views/temperature/temperature.component') },
            { path: 'feeding', loadComponent: () => import('./views/feeding/feeding.component') },
            { path: 'control', loadComponent: () => import('./views/control/control.component') },
            { path: 'panel', loadComponent: () => import('./views/panel/panel.component') },
            { path: 'info-members', loadComponent:() => import('./views/info/info.component') },
            { path: 'error', loadComponent: () => import('./views/notfound/notfound.component') },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    {
        path:'**',
        redirectTo:'error'
    }
];
