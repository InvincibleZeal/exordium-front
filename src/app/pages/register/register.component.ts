import { Component, OnInit, ViewChild } from '@angular/core';
import * as Rellax from 'rellax';

import { User } from './../../core/interfaces/user';
import { AuthService } from 'app/core/services/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    @ViewChild('success') successModal: any;
    @ViewChild('failure') failureModal: any;
    public focus: boolean;
    public focus1: boolean;
    public focus2: boolean;
    public focus3: boolean;
    public focus4: boolean;
    private closeResult: string;
    public disabledBtn: boolean;
    public user: User;
    public data: User = {
        name: undefined,
        email: undefined,
        phone: undefined,
        semester: undefined,
        college: undefined
    }


    constructor(private authService: AuthService, private modalService: NgbModal) { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
    }

    onSubmit() {
        console.log('hi')
        this.disabledBtn = true;
        this.authService.register(this.data).subscribe((user: any) => {
            if (!user) {
                console.log(user);
                this.open(this.failureModal, 'modal_mini', 'sm', 'danger');
            } else {
                this.user = JSON.parse(JSON.stringify(this.data));
                Object.keys(this.data).forEach(key => this.data[key] = undefined);
                this.open(this.successModal, 'modal_mini', 'sm', 'success');
            }
        });
        // this.open(this.failureModal, 'modal_mini', 'sm', 'success');
        this.disabledBtn = false;
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
