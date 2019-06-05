import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
<<<<<<< HEAD
import { WorkoutRunnerComponent } from "./workout-runner/workout-runner.component";
import { StartComponent } from "./start/start.component";
import { FinishComponent } from "./finish/finish.component";
import { WorkoutHistoryComponent } from "./workout-history/workout-history.component";

const routes: Routes = [
  { path: "start", component: StartComponent },
  { path: "workout", component: WorkoutRunnerComponent },
  { path: "finish", component: FinishComponent },
  { path: "history", component: WorkoutHistoryComponent },
  { path: "**", redirectTo: "/start"} // catch all path
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> fix all npm audit vulnerabilities
