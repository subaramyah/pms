import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';

import { CoreRoutingModule } from './core-routing.module';

import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavItemListComponent } from './side-nav-item-list/side-nav-item-list.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [SideNavComponent, HeaderComponent, FooterComponent, SideNavItemListComponent, MainComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedMaterialModule
  ],
  exports: [
    SharedMaterialModule
  ]
})
export class CoreModule { }
