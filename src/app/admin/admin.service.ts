import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminModel } from '../shared/admin.model';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit{
  formValue!: FormGroup;
  beachModelObj: AdminModel = new AdminModel();

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      type: [''],
      description: [''],
      image: [''],
    });
  }

  //  post beach
  addBeach() {
    this.beachModelObj.name = this.formValue.value.name;
    this.beachModelObj.type = this.formValue.value.type;
    this.beachModelObj.description = this.formValue.value.description;
    this.beachModelObj.image = this.formValue.value.image;

    this.api.postBeach(this.beachModelObj, this.theHeaders).subscribe(
      (res) => {
        alert('success');
        // let ref = document.getElementById('cancel')
        // ref?.click();
        this.formValue.reset();
        // this.getAllBeach();
      },
      (err) => {
        alert('Error occure');
      }
    );
  }

  // Edit beach
   editBeach(beach: any) {
    // this.showAdd = false;
    // this.showUpdate = true;
    this.beachModelObj.id = beach.id;
    this.formValue.controls['name'].setValue(beach.name);
    this.formValue.controls['type'].setValue(beach.type);
    this.formValue.controls['description'].setValue(beach.description);
    this.formValue.controls['image'].setValue(beach.image);
   }
}
