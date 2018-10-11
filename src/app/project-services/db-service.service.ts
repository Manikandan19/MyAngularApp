import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDetail } from '../project-details/project-detail';
import { EditService } from './edit.service';
const baseUrl: string = 'http://localhost:1905';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/text');

  constructor(private http: HttpClient, private edit: EditService) { }

  saveDetails(details: any) {
    console.log(details.members.value);
    var body = { "name": details.name.value, "code": details.code.value, "manager": details.manager.value, "description": details.description.value, "startDate": details.startDate.value, "endDate": details.endDate.value, "budget": details.budget.value, "teamMembers": details.members.value };

    return this.http.post<ProjectDetail[]>(baseUrl + "/saveDetails", body).subscribe((res) => {

      if (res) {

      }

    });
  }

  availableProjects() {
    return this.http.get<ProjectDetail[]>(baseUrl + "/getDetails/");
  }

  editDetails(data: any) {
    return this.http.get<ProjectDetail[]>(baseUrl + "/editDetails/" + data);
  }

  updateDetails(details: any) {
    var body = { "name": details.name.value, "code": details.code.value, "manager": details.manager.value, "description": details.description.value, "startDate": details.startDate.value, "endDate": details.endDate.value, "budget": details.budget.value, "teamMembers": details.members.value };
    return this.http.post<ProjectDetail[]>(baseUrl + "/updateDetails", body).subscribe(res => res);
  }
}
