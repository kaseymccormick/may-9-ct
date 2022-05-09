import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ct-admin',
  templateUrl: './ct-admin.component.html',
  styleUrls: ['./ct-admin.component.css'],
})
export class CtAdminComponent implements OnInit {
  public form: FormGroup;
  public user_form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  // function to build form
  buildForm() {
    this.form = this.fb.group({
      title: ['Protein', Validators.required],
      target: [null, Validators.required],
      minimum: [2, Validators.required],
      maximum: [5, Validators.required],
      unit: ['servings', Validators.required],
      description: [
        'Servings can be measured by weight or visually, a palm size.',
        Validators.required,
      ],
      milestones: this.fb.array([
        this.fb.group({
          days: [],
          streak_icon: [],
          animation: [],
          increase_goal: [],
          text: [],
        }),
      ]),
    });
    this.user_form = this.fb.group({
      goal_range: ['3', Validators.required],
      goal_input: ['3', Validators.required],
    });
    console.log('thisf', this.form.getRawValue());
    console.log('goaluser', this.user_form.getRawValue());
  }
  //
  // getters of form fields
  /**
   * These are the fields on the form, made accessable for the status css
   * You can also use these to get values
   */
  get title(): AbstractControl {
    return this.form.get('title');
  }
  get maximum(): AbstractControl {
    return this.form.get('maximum');
  }
  get minimum(): AbstractControl {
    return this.form.get('minimum');
  }
  get milestones(): AbstractControl {
    return this.form.get('milestones');
  }

  removeMilestoneFormControl(i) {
    let milestoneArray = this.form.controls.milestones as FormArray;
    milestoneArray.removeAt(i);
  }

  addMilestoneFormControl() {
    let milestoneArray = this.form.controls.milestones as FormArray;
    let arraylen = milestoneArray.length;

    let newMilestoneGroup: FormGroup = this.fb.group({
      days: ['', Validators.required],
      streak_icon: [],
      animation: [],
      increase_goal: [],
      text: [],
    });

    milestoneArray.insert(arraylen, newMilestoneGroup);
  }
}
