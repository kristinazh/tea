import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {AboutComponent} from "./about/about.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbAccordionModule, NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MainRoutingModule,
    NgbAccordionModule,
    NgbModalModule,
    NgbModule
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
