import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkoutRunnerComponent } from "./workout-runner.component";
import { ExerciseDecriptionComponent } from "./exercise-decription/exercise-decription.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { SecondsToTimePipe } from "./shared/seconds-to-time.pipe";

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
