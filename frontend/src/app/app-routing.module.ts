import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { careerComponent } from './career/career.component';
import { DesignComponent } from './design/design.component';
import { MoreComponent } from './more/more.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CookiesComponent } from './cookies/cookies.component';
import { TermsComponent } from './terms/terms.component';
import { CeilingComponent } from './ceiling/ceiling.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { WallComponent } from './wall/wall.component';
import { MaterialComponent } from './material/material.component';
import { VastuComponent } from './vastu/vastu.component';
import { ElectricComponent } from './electric/electric.component';
import { BuildComponent } from './build/build.component';



const routes: Routes = [
{path : 'home', component:HomeComponent},
{path : 'career', component:careerComponent},
{path : 'design', component:DesignComponent},
{path : 'more', component:MoreComponent},
{path : 'contact', component:ContactComponent},
{path : 'privacy', component:PrivacyComponent},
{path : 'cookies', component:CookiesComponent},
{path : 'tearms', component:TermsComponent},
{path : 'ceiling', component:CeilingComponent},
{path : 'kitchen', component:KitchenComponent},
{path : 'bedroom', component:BedroomComponent},
{path : 'wall', component:WallComponent},
{path : 'material', component:MaterialComponent},
{path : 'vastu', component:VastuComponent},
{path : 'electric', component:ElectricComponent},
{path : 'build', component:BuildComponent},
{path :'', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
