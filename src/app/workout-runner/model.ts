export class WorkoutPlan {
  // declare and init in contructor
  constructor(
    public name: string,
    public title: string,
    public restBetweenExercise: number,
    public exercises: ExercisePlan[],
    public description?: string
  ) {}

  // function to calculate the workoutDuration
  totalWorkoutDuration(): number {
    if (!this.exercises) {
      return 0;
    }

    const total = this.exercises
      .map(v => v.duration)
      .reduce((previous, current) => previous + current);

    // 10 * 2 + 30 = 50mn
    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;

  }
}

export class ExercisePlan {
  constructor(public exercise: Exercise, public duration: number) {}
}

export class Exercise {
  // declare and init in contructor
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public nameSound?: string,
    public procedure?: string,
    public videos?: Array<string>
  ) {}
}
