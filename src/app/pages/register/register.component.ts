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
    @ViewChild('failure') failureModal: any;
    public focus: boolean;
    public focus1: boolean;
    public focus2: boolean;
    public focus3: boolean;
    public focus4: boolean;
    private closeResult: string;
    public disable: boolean = false;
    public user: User;

    constructor(private authService: AuthService, private modalService: NgbModal) { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
    }

    onSubmit() {
        console.log(this.data.value);
        this.disable = true;

        this.authService.register(this.data.value).subscribe((user: any) => {
            console.log(user);
            if (!user) {
                console.log(user);
                this.open(this.failureModal, 'modal_mini', 'sm', 'danger');
            } else {
                this.user = user;
                Object.keys(this.data.value).forEach(key => this.data.value[key] = undefined);
                this.open(this.successModal, 'modal_mini', 'sm', 'success');
                this.data.reset();
                this.disable = false;
            }
        });
        // this.open(this.failureModal, 'modal_mini', 'sm', 'success');
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
