import { Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-exercise-decription",
  templateUrl: "./exercise-decription.component.html",
  styles: []
})
export class ExerciseDecriptionComponent implements OnInit {

  @Input() description: string;
  @Input() steps: string;

  constructor() { }

  ngOnInit() {
  }



}
