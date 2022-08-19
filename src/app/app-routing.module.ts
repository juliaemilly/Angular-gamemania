import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Login', component:LoginComponent},
  {path:'Carrinho',component:CarrinhoComponent},
  {path:'Produtos',component:ProdutosComponent},
  {path:'Cadastro',component:CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
