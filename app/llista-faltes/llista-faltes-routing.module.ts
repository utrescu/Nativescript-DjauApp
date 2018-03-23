import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LlistaFaltesComponent } from "./llista-faltes.component";

const routes: Routes = [{ path: "", component: LlistaFaltesComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class LlistaFaltesRoutingModule {}
