import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { YouTubeSearchComponent } from "./you-tube-search/you-tube-search.component";

const appRoutes: Routes = [
    {path: '', component: YouTubeSearchComponent}

]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}