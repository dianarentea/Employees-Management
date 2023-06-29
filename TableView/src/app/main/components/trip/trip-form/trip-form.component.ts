import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Trip } from 'src/app/main/interfaces/trip';
import { TripsService } from 'src/app/main/services/trips.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {
  editMode = false;
  validateForm: FormGroup;
  selectedFile: File | null | undefined;

  @Input() tripIndex: number | null = null;
  @Input() tripToEdit: Trip | null = null;
  @Output() formSubmitted = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private tripsService: TripsService, private modalRef: NzModalRef) {
    this.validateForm = this.fb.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      attraction: ['', [Validators.required]],
      restaurant: ['', [Validators.required]],
      image: "assets/default.jpg",
      id: null,
      userEmail: null,
      likes: null,
      likedByCurrentUser: false,
    });
  }

  ngOnInit(): void {
    if (this.tripToEdit && this.tripIndex !== null) {
      this.setFormData(this.tripToEdit, this.tripIndex);
    }
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    if (this.validateForm.valid) {
      const formValue = this.validateForm.value;
      this.validateForm.value.id = this.tripToEdit?.id;
      this.validateForm.value.likes = this.tripToEdit?.likes;
      this.validateForm.value.userEmail = this.tripToEdit?.userEmail;

      if (this.editMode && this.tripIndex !== null) {
        this.tripsService.editTrip(formValue, this.tripIndex);
      }
      else {
        this.tripsService.addTrip(formValue);
      }

      this.resetForm(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      this.editMode = false;
      this.tripIndex = null;
      this.modalRef.close();
      this.formSubmitted.emit();
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  setFormData(trip: Trip, index: number) {

    const updatedTrip = {
      ...trip,
    };
    this.validateForm.patchValue(updatedTrip);
    this.tripIndex = index;
    this.editMode = true;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }
}
