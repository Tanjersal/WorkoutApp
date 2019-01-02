import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
  transform(value: Array<any>, field: string): any {

    // console.log("Value: ", value);
    // console.log("field: ", field);

    if (value == null || value.length <= 1) {
      return null;
    }

    if (field.startsWith("-")) {
      field = field.substring(1);
      if (
        typeof (value[0][field] === "string") ||
        typeof (value[0][field] instanceof String)
      ) {
        console.log(value[0][field]);
        return [...value].sort((a, b) => b.toString().localeCompare(a.toString()));
      }
      return [...value].sort((a, b) => b - a);
    } else {
      if (
        typeof (value[0][field] === "string") ||
        typeof (value[0][field] instanceof String)
      ) {
        return [...value].sort((a, b) => a.toString().localeCompare(b.toString()));
      }
      return [...value].sort((a, b) => a - b);
    }
  }
}
