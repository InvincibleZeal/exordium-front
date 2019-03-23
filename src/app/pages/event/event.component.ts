import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

import { AuthService } from 'app/core/services/auth.service';
import { DataService } from 'app/core/services/data.service';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
    public url: string;
    public event: any;
    public focus1;
    public focus2;
    public loading;
    private closeResult: string;
    @ViewChild('f') data: NgForm;
    @ViewChild('success') success: any;
    @ViewChild('invalidId') invalidId: any;
    @ViewChild('invalidEmail') invalidEmail: any;
    @ViewChild('alreadyRegistered') alreadyRegistered: any;
    @ViewChild('error') error: any;

    constructor(
        private dataService: DataService,
        private authService: AuthService,
        private modalService: NgbModal,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
        this.url = this.route.snapshot.params['id'];
        this.dataService.getEvent(this.url).subscribe(event => {
            this.event = event;
            if (!this.event) this.router.navigate(['/events'])
        });
    }

    onSubmit() {
        this.loading = true;
        this.data.value.uid = this.data.value.uid.toUpperCase();
        this.data.value.id = this.event.id;

        this.authService.participate(this.data.value).subscribe((res: any) => {
            if (res.message.includes('Participation Successful')) {
                this.open(this.success, 'modal_mini', 'sm', 'success');
                this.data.reset();
            } else if (res.message) {
                if (res.message.includes('Invalid Exordium ID'))
                    this.open(this.invalidId, 'modal_mini', 'sm', 'danger');
                else if (res.message.includes('Incorrect Email'))
                    this.open(this.invalidEmail, 'modal_mini', 'sm', 'danger');
                else if (res.message.includes('Already Registered')) {
                    this.open(this.alreadyRegistered, 'modal_mini', 'sm', 'success');
                    this.data.reset();
                }
            } else {
                this.open(this.error, 'modal_mini', 'sm', 'danger')
            }
            this.loading = false;
        })
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
