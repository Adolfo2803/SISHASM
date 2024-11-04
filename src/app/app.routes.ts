import { Routes } from '@angular/router';
export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'login',
                loadComponent: () => import('./shared/components/login/login.component')
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            // {
            //     path: 'archivo_clinic',
            //     loadComponent: () => import('./business/archivo-clinic/archivo-clinic.component')
            // },
            {
<<<<<<< HEAD
                path: 'archivo',
=======
                path: 'archivob',
>>>>>>> 2e12a99 (Login: se crea nuevo componente, para archivo, se limita el login de acceso)
                loadComponent: () => import('./business/archivo/archivo.component')
            },
            {
                path: 'buscar_archivo',
                loadComponent: () => import('./business/archivo-clinic/components/busqueda/busqueda.component')
            },

            {
                path: 'vacaciones',
                loadComponent: () => import('./business/vacaciones/vacaciones.component')
            },

            {
                path: 'ausencias',
                loadComponent: () => import('./business/ausencias/ausencias.component')
            },


            {
                path: 'registro-cirugias',
                loadComponent: () => import('./business/registro-cirugias/registro-cirugias.component')
            },
            {
                path: 'busqueda-cirugias',
                loadComponent: () => import('./business/busqueda-cirugias/busqueda-cirugias.component')
            },
         

           



            {
                path: '',
                redirectTo: 'login',
                pathMatch:'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo:'login'
    }

   
];