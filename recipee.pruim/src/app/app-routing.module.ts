import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recipe/:bookID/:recipeID',
    loadChildren: () => import('./pages/recipe/recipe.module').then( m => m.recipePageModule)
  },
  {
    path: 'table-of-contents',
    loadChildren: () => import('./pages/table-of-contents/table-of-contents.module').then( m => m.TableOfContentsPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },

  {
    path: 'book-list',
    loadChildren: () => import('./pages/book-list/book-list.module').then( m => m.BookListPageModule)
  },








  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
