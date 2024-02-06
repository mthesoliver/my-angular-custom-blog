import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'content/:title', component: ContentComponent },
    { path: 'admin', component: AdminComponent },
];
