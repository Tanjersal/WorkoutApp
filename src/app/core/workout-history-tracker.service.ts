import { CoreModule } from "./core.module";
import { Injectable } from "@angular/core";
import { ExercisePlan } from "../workout-runner/model";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: CoreModule
})
export class WorkoutHistoryTrackerService {
  private maxHistoryItems = 20; // number of items to track
  private currentWorkoutLogEntry: WorkoutLogEntry = null;

  private workoutHistory = Array<WorkoutLogEntry>();
  private workoutTracked: boolean;

  private storageKey = "workouts"; // key for local storage

  constructor(private storage: LocalStorageService) {
    this.workoutHistory = (
      this.storage.getItem<Array<WorkoutLogEntry>>(this.storageKey) || []
    ).map((history: WorkoutLogEntry) => {

      history.startedOn = new Date(history.startedOn.toString());
      history.endedOn = history.endedOn == null ? null : new Date(history.endedOn.toString());

      return history;
    });
  }

  /**
   * Getter
   */
  get Tracking() {
    return this.workoutTracked;
  }

  /**
   * Start service tracking
   */
  startTracking() {
    this.workoutTracked = true;
    this.currentWorkoutLogEntry = new WorkoutLogEntry(new Date());

    if (this.workoutHistory.length >= this.maxHistoryItems) {
      this.workoutHistory.shift();
    }

    this.workoutHistory.push(this.currentWorkoutLogEntry);
    this.storage.setItem(this.storageKey, this.workoutHistory);
    // console.log(this.workoutHistory);
  }

  /**
   * Keep tracks of each completed exercise
   */
  exerciseComplete(exercise: ExercisePlan) {
    this.currentWorkoutLogEntry.lastExercise = exercise.exercise.title;
    ++this.currentWorkoutLogEntry.exercicesDone;
    this.storage.setItem(this.storageKey, this.workoutHistory);
  }

  /**
   * End service tracking
   */
  endTracking(completed: boolean) {
    this.currentWorkoutLogEntry.endedOn = new Date();
    this.currentWorkoutLogEntry.completed = completed;

    this.currentWorkoutLogEntry = null;
    this.workoutTracked = false;
    this.storage.setItem(this.storageKey, this.workoutHistory);
  }

  /**
   * Workout history
   */
  getHistory() {
    return this.workoutHistory;
  }
}

export class WorkoutLogEntry {
  constructor(
    public startedOn: Date,
    public completed: boolean = false,
    public exercicesDone: number = 0,
    public lastExercise?: string,
    public endedOn?: Date
  ) {}
}
