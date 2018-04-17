import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsNewComponent } from './authors-new/authors-new.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/new', component: AuthorsNewComponent },
  { path: 'authors/:id', component: AuthorComponent },
  { path: '', pathMatch: 'full', redirectTo: 'authors'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
