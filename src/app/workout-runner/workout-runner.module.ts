import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkoutRunnerComponent } from "./workout-runner.component";
import { ExerciseDecriptionComponent } from "./exercise-decription/exercise-decription.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";
<<<<<<< HEAD
import { SecondsToTimePipe } from "./shared/seconds-to-time.pipe";
=======
import { SecondsToTimePipe } from "../shared/seconds-to-time.pipe";
>>>>>>> fix all npm audit vulnerabilities

@NgModule({
  imports: [CommonModule],
  exports: [WorkoutRunnerComponent],
  declarations: [
    WorkoutRunnerComponent,
    ExerciseDecriptionComponent,
    VideoPlayerComponent,
    SecondsToTimePipe
  ]
})
export class WorkoutRunnerModule {}
