import { RouterModule, Routes } from '@angular/router';

import {AboutComponent,
  PortafolioComponent,
  PortfolioItemComponent,
  SearchComponent
} from "./components/index.paginas"

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio-item/:id', component: PortfolioItemComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

/*useHash perimite compatibilidad con otros archivos diferentes a html5*/
export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
