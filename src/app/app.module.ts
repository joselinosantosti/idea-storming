import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CriarIdeiaComponent } from './componentes/ideias/criar-ideia/criar-ideia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarIdeiasComponent } from './componentes/ideias/listar-ideias/listar-ideias.component';
import { IdeiaComponent } from './componentes/ideias/ideia/ideia.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirIdeiaComponent } from './componentes/ideias/excluir-ideia/excluir-ideia.component';
import { EditarIdeiaComponent } from './componentes/ideias/editar-ideia/editar-ideia.component';
import { BotaoCarregarMaisComponent } from './componentes/ideias/listar-ideias/botao-carregar-mais/botao-carregar-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CriarIdeiaComponent,
    ListarIdeiasComponent,
    IdeiaComponent,
    ExcluirIdeiaComponent,
    EditarIdeiaComponent,
    BotaoCarregarMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
