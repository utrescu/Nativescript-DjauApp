import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  {
    path: "llista",
    loadChildren: "./llista-faltes/llista-faltes.module#LlistaFaltesModule"
  },
  {
    path: "settings",
    loadChildren: "./settings/settings.module#SettingsModule"
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
