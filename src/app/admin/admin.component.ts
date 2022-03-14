import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminModel } from '../shared/admin.model';
import { ApiService } from '../shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  access_token = localStorage.getItem('token');
  username = '';
  closeResult = '';
  formValue!: FormGroup;
  beachData!: any;
  beachModelObj: AdminModel = new AdminModel();
  showAdd!: boolean;
  showUpdate!: boolean;

  theHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.access_token}`,
  });

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      type: [''],
      description: [''],
      image: [''],
    });

    this.getAllBeach(this.theHeaders);
    this.onGetUserData();
  }

  clickAddBeach() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postBeachDetails() {
    this.beachModelObj.name = this.formValue.value.name;
    this.beachModelObj.type = this.formValue.value.type;
    this.beachModelObj.description = this.formValue.value.description;
    this.beachModelObj.image = this.formValue.value.image;

    this.api.postBeach(this.beachModelObj, this.theHeaders).subscribe(
      (res) => {
        Swal.fire('Thank you...', res.message, 'success');
        // let ref = document.getElementById('cancel')
        // ref?.click();
        this.formValue.reset();
        this.getAllBeach(this.theHeaders);
      },
      (err) => {
        Swal.fire('Error occurred!', err.error.message, 'error');
      }
    );
  }

  // get user data
  onGetUserData() {
    this.api.getUser(this.theHeaders).subscribe(
      (res) => {
        this.username = res.user.name;
      },
      (err) => {
        console.log('here error', err);
      }
    );
  }

  // get all beaches
  getAllBeach(theHeaders: any) {
    this.api.getBeach(theHeaders).subscribe((res) => {
      this.beachData = res;
    });
  }

  // delete beach
  deleteBeach(beach: any) {
    this.api.deleteBeach(beach.id, this.theHeaders).subscribe((res) => {
      alert('Beach deleted');
      // Swal.fire('Thank you...', res.message, 'success');
      this.getAllBeach(this.theHeaders);
    });
  }

  // edit beach
  onEdit(beach: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.beachModelObj.id = beach.id;
    this.formValue.controls['name'].setValue(beach.name);
    this.formValue.controls['type'].setValue(beach.type);
    this.formValue.controls['description'].setValue(beach.description);
    this.formValue.controls['image'].setValue(beach.image);
  }
  updateBeachDetails() {
    this.beachModelObj.name = this.formValue.value.name;
    this.beachModelObj.type = this.formValue.value.type;
    this.beachModelObj.description = this.formValue.value.description;
    this.beachModelObj.image = this.formValue.value.image;
    this.api
      .updateBeach(this.beachModelObj, this.beachModelObj.id, this.theHeaders)
      .subscribe((res) => {
        Swal.fire('Thank you...', res.message, 'success');
        // let ref = document.getElementById('cancel')
        // ref?.click();
        this.formValue.reset();
        this.getAllBeach(this.theHeaders);
      });
  }
}
