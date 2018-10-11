import { Injectable } from '@angular/core';
import { ProjectDetail } from '../project-details/project-detail';


@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() { }
  private value: any = [];

  public set data(value: any) {
    this.value = value;
  }

  public get data() {
    return this.value;
  }

  private _name: String = '';

  set name(name: String) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  private _detail: ProjectDetail[] = [];

  set detail(data: ProjectDetail[]) {
    this._detail = data;
  }

  get detail() {
    return this._detail;
  }

  private _savedData: ProjectDetail;

  set savedData(data: any) {
    this._savedData = data;
  }
  get savedData() {
    return this._savedData;
  }

}
