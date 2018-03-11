import { Routes } from '@angular/router';
import { HomeRoutes, NoContentRoutes } from './features';

export const ROUTES: Routes = [
  ...HomeRoutes,
  ...NoContentRoutes
];
