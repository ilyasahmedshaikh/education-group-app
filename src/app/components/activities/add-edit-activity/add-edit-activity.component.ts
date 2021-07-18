import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-activity',
  templateUrl: './add-edit-activity.component.html',
  styleUrls: ['./add-edit-activity.component.scss']
})
export class AddEditActivityComponent implements OnInit {

  programForm: any = FormGroup;
  showEventFields: boolean = false;
  activityTypes: any = [
    { id: 0, name: "Choose Any Type" },
    { id: 1, name: 'Event' },
    { id: 2, name: 'Announcement' }
  ]

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.programForm.valueChanges.subscribe(value => {
      if (value.activityType == 1) this.showEventFields = true
      else this.showEventFields = false;
    })
  }

  formInit() {
    this.programForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      activityType: [0, Validators.required],
      dateTime: [''],
      location: [''],
    });
  }

}
