import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import swal from 'sweetalert';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-parent-register',
  templateUrl: './parent-register.component.html',
  styleUrls: ['./parent-register.component.css']
})
export class ParentRegisterComponent implements OnInit {
  public info: Array<Info>;
  public form: any;
  public counter = 0;
  public newUser: any;
  public notified: string;
  public submitclick = true;
  public editclick = false;
  public editable = false;
  id = false;
  id2: number;
  name2: string;
  email2: string;
  phone2: string;
  submit = "Submit"


  constructor(private service: HttpServiceService) {
    this.info = new Array<Info>();
    this.form = new Info();
  }

  ngOnInit() {
    this.service.getDataApi()
      .subscribe((data: any[]) => (this.info = data))
  }
  onSubmit(form) {
    if (this.editable) {

      this.service.updateData(this.form, this.id2).subscribe((res) => {
      })
      console.log("infolist ", this.info)
      this.info.forEach(e => {
        if (e.id == this.id2) {
          e.name = this.name2
          e.email = this.email2
          e.phone = this.phone2
          console.log("e  ", e)
        }
      })
      this.editable = false
    } else {

      swal({
        title: "Submitted Successfully!",
        text: "Thank you for registering!You're information has been sent.",
        icon: "success"
      });
      this.submit = "Submit"
      this.form = new Info
      this.form.name = form.form.value.name
      this.form.email = form.form.value.email
      this.form.phone = form.form.value.phone
      this.service.addApi(this.form)
        .subscribe((res: any) => {
          this.newUser = res
          this.newUser.id -= 1
          this.newUser.id += this.counter
          this.info.push(this.newUser),
            console.log("Parent infolist ", this.info)
        })
      this.counter += 1
    }
    form.form.reset();
    this.submitclick = false;
    this.editclick = true;
    this.id = false;
  }

  editForm(info) {
    this.editable = true;
    this.submit = "Save"
    this.id2 = info.id;
    this.name2 = info.name;
    this.email2 = info.email;
    this.phone2 = info.phone;
  }
}
