import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostArticleComponent } from './pages/post-article/post-article.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "nota/:id", component: DetailArticleComponent},
  {path: "ingresar", component: LoginComponent},
  {path: "registro", component: RegisterComponent},
  {path: "publicar", component: PostArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
