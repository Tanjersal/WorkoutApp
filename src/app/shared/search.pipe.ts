import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
  pure: true
})
export class SearchPipe implements PipeTransform {
  transform(value: Array<any>, field: string, searchTerm: string): any {
    if (!field) {
      return [];
    }

    if (searchTerm == null) {
      return [...value]; // return a new array
    }

    return value.filter((history) => history[field] === searchTerm);
  }
}
