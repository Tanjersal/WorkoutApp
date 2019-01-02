import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "secondsToTime"
})
export class SecondsToTimePipe implements PipeTransform {

  // format the input to the according format
  transform(value: any, args?: any): any {
    if (!isNaN(value)) {
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor(value / 60);
      const seconds = value;

      return (
        ("0" + hours).substr(-2) +
        ":" +
        ("0" + minutes).substr(-2) +
        ":" +
        ("0" + seconds).substr(-2)
      );
    }
    return;
  }
}
