import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DbServiceService } from '../project-services/db-service.service';
import { EditService } from '../project-services/edit.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {


  public registerForm: FormGroup;

  constructor(private db: DbServiceService, private formBuilder: FormBuilder, private router: Router, private edit: EditService) {
  }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      code: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      manager: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
      description: ['', Validators.maxLength(1000)],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      budget: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{0,2}$/)])],
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

  get checkMembers() {
    if (this.teamDetails.length === 1) {
      return true;
    }
    return false;
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.db.saveDetails(this.registerForm.controls);
    this.edit.name = this.registerForm.controls.name.value;
    this.router.navigate(['/success']);
  }


}
