import { catchError } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as Rellax from 'rellax';

import { User } from './../../core/interfaces/user';
import { AuthService } from 'app/core/services/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    @ViewChild('f') data;
    @ViewChild('success') successModal: any;
    @ViewChild('duplicateEmail') duplicateEmail: any;
    @ViewChild('error') error: any;
    public focus: boolean;
    public focus1: boolean;
    public focus2: boolean;
    public focus3: boolean;
    public focus4: boolean;
    public focus5: boolean;
    public loading: boolean = false;
    public user: User;
    private closeResult: string;

    constructor(private authService: AuthService, private modalService: NgbModal) { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
    }

    onSubmit() {
        this.loading = true;
        if (this.data.controls.college.value === 'Other') {
            this.data.value.college = this.data.value['other-college'];
        }

        console.log(this.data.value);
        this.authService.register(this.data.value).subscribe((user: any) => {
            if (user.email) {
                this.user = user;
                Object.keys(this.data.value).forEach(key => this.data.value[key] = undefined);
                this.open(this.successModal, 'modal_mini', 'sm', 'success');
                this.data.reset();

            } else if (!user.email && user.message.toLowerCase().includes('duplicate email')) {
                this.open(this.duplicateEmail, 'modal_mini', 'sm', 'danger');
                this.data.controls.email.reset();
            } else {
                this.open(this.error, 'modal_mini', 'sm', 'danger')
            }
            this.loading = false;
        });
    }

    open(content, type, modalDimension, variant) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: `modal-mini modal-${variant}`, size: 'sm', backdrop: 'static', keyboard: false }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
