import { CoreModule } from "./core.module";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {
  constructor() {}

  /**
   * Retrieve history from browser local storage
   */
  getItem<T>(key: string): T {
    if (localStorage[key]) {
      return <T>JSON.parse(localStorage[key]);
    }
    return null;
  }

  /**
   * Set history into local storage
   * @param key Object key
   * @param item Object
   */
  setItem(key: string, item: any) {
    localStorage[key] = JSON.stringify(item);
  }
}
