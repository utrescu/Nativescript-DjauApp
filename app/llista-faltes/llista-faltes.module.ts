import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";

import { LlistaFaltesRoutingModule } from "./llista-faltes-routing.module";
import { LlistaFaltesComponent } from "./llista-faltes.component";

@NgModule({
  imports: [NativeScriptCommonModule, LlistaFaltesRoutingModule, SharedModule],
  declarations: [LlistaFaltesComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LlistaFaltesModule {}
