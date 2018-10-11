import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectDetail } from '../../project-details/project-detail';
import { DbServiceService } from '../../project-services/db-service.service';
import { EditService } from '../../project-services/edit.service';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent implements OnInit {

  constructor(private router: Router, private db: DbServiceService, private formBuilder: FormBuilder, private edit: EditService) { }

  available: any;
  values: any = [];
  details: ProjectDetail[] = [];
  registerForm: FormGroup;
  projectName: String = '';


  ngOnInit() {
    this.setValues();
    this.displayDetails();
  }

  setValues() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      code: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      manager: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
      description: ['', Validators.maxLength(1000)],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      budget: ['', Validators.compose([Validators.required, Validators.pattern(/\d{0,2}/)])],
      members: this.formBuilder.array([this.team])
    });
  }

  addMembers() {
    return this.teamDetails.push(this.team);
  }

  removeMembers(index) {
    return this.teamDetails.removeAt(index);
  }

  get teamDetails() {
    return this.registerForm.get('members') as FormArray;
  }

  get team() {
    return this.formBuilder.group({
      teamMember: ['', Validators.compose([Validators.required, Validators.maxLength(40)])]
    });
  }

  displayDetails() {
    this.values = this.edit.data;
    this.details = this.values;
    this.f.name.setValue(this.details[0].name);
    this.edit.name = this.details[0].name;
    this.projectName = this.details[0].name;
    this.f.code.setValue(this.details[0].code);
    this.f.manager.setValue(this.details[0].manager);
    this.f.description.setValue(this.details[0].description);
    let sDate = this.setDate(this.details[0].startDate);
    this.f.startDate.setValue(sDate);
    let eDate = this.setDate(this.details[0].endDate);
    this.f.endDate.setValue(eDate);
    this.f.budget.setValue(this.details[0].budget);
    var data: String[] = this.details[0].teamMembers.split(" ");
    var detail: any[] = [];
    for (let i of data) {
      if (i != "") {
        let d: any = { "teamMember": i };
        detail.push(d);
        this.teamDetails.push(this.team);
      }

    }
    this.teamDetails.removeAt(this.teamDetails.length - 1);
    this.teamDetails.setValue(detail);
    console.log(this.f.members);
  }

  setDate(data: Date) {
    let date = new Date(data);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    var format = '';
    format = yyyy + "-";
    if (mm < 10) {
      format += '0' + mm + '-';
    }
    else {
      format += mm + '-';
    }
    if (dd < 10) {
      format += '0' + dd;
    }
    else {
      format += dd;
    }
    return format;
  }



  update() {
    this.db.updateDetails(this.f);
    this.router.navigate(['/success']);
  }

  get f() {
    return this.registerForm.controls;
  }

  goBack() {
    this.router.navigate(["/available"]);
  }
  get checkMembers() {
    if (this.teamDetails.length === 1) {
      return true;
    }
    return false;
  }
}
