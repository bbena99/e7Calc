import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { GearBuilderComponent } from './components/gear-builder/gear-builder.component';

const routes: Routes = [
  {path: 'Home', component : CharacterListComponent},
  {path: 'Character/:Name', component: GearBuilderComponent},
  {path: '**', redirectTo: 'Home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
