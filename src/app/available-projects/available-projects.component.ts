import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetail } from '../project-details/project-detail';
import { DbServiceService } from '../project-services/db-service.service';
import { EditService } from '../project-services/edit.service';

@Component({
  selector: 'app-available-projects',
  templateUrl: './available-projects.component.html',
  styleUrls: ['./available-projects.component.css']
})
export class AvailableProjectsComponent {

  constructor(private db: DbServiceService, private router: Router, private edit: EditService) {
    this.detail();
  }

  available: any;
  editable: any;
  values: any = [];
  val: any = [];
  details: ProjectDetail[] = [];
  search: String = '';
  field: String = 'name';
  data: any;

  selected: any = [];



  editValues(data: any) {
    this.db.editDetails(data).subscribe((val: ProjectDetail[]) => {
      this.edit.data = val;
      this.router.navigate(['/available/edit']);
    });
  }

  detail() {
    this.db.availableProjects().subscribe((data) => {
      this.details = data;
    }
    );

  }

  ngOnInit() {
    this.detail();
  }

  getData(event) {
    this.search = event;
  }
  getField(event) {
    this.field = event;
    console.log(this.field);
  }

}
