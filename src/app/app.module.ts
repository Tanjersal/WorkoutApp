import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WorkoutRunnerModule } from "./workout-runner/workout-runner.module";
<<<<<<< HEAD
import { StartComponent } from "./start/start.component";
import { FinishComponent } from "./finish/finish.component";
import { CoreModule } from "../app/core/core.module";
import { WorkoutHistoryComponent } from "./workout-history/workout-history.component";
import { SharedModule } from "./shared/shared.module";
=======
>>>>>>> fix all npm audit vulnerabilities

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    StartComponent,
    FinishComponent,
    WorkoutHistoryComponent,
=======
>>>>>>> fix all npm audit vulnerabilities
  ],
  imports: [
    BrowserModule,
    WorkoutRunnerModule,
<<<<<<< HEAD
    AppRoutingModule,
    CoreModule,
    SharedModule
=======
    AppRoutingModule
>>>>>>> fix all npm audit vulnerabilities
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
