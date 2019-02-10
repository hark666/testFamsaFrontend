import { Component, OnInit }       from '@angular/core';
import { FormGroup, FormControl, Validators }    from '@angular/forms';
import { NgbModal, ModalDismissReasons  } from '@ng-bootstrap/ng-bootstrap';

import { activityService } from "./../../service/activity/activity.service";

@Component( {
  selector: 'app-activity',
  templateUrl: './activity.component.html'
} )

export class ActivityComponent implements OnInit {

  activities:any = [];
  closeResult: string;
  addActivity: FormGroup;
  updateActivity: FormGroup;
  activityToUpdate = 0;
  
  constructor (
    private modalService: NgbModal,
    private activityService: activityService
  ) {
    this.addActivity =     new FormGroup( {
      description:        new FormControl()
    } );
    this.updateActivity =     new FormGroup( {
      description:        new FormControl()
    } );
  }

    ngOnInit(){
      this.addActivity =     new FormGroup( {
        description:        new FormControl()
      } );
      this.updateActivity =     new FormGroup( {
        description:        new FormControl()
      } );
      this.activityService.get().subscribe(
        activities => {
          this.activities = activities;
        },
        error => {
          console.log( error );
        }
      );
    }

    abrirModalCrearPendiente( contentAdd ){
      this.modalService.open(contentAdd, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        if( result === 'Save click' ){
          this.activityService.post({'id':0,'description':this.addActivity.controls['description'].value}).subscribe(
            activities => {
              this.ngOnInit();
            },
            error => {
              console.log( error );
            }
          );
        }
        this.closeResult = `Closed with: ${result}`;
        console.log( this.closeResult );
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        console.log( this.closeResult );
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    borrarPendiente( activity ){
      this.activityService.delete(activity.activityId).subscribe(
        activities => {
          this.ngOnInit();
        },
        error => {
          console.log( error );
        }
      );
    }

    actualizarPendiente( activity, contentUpdate ){
      this.modalService.open(contentUpdate, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        if( result === 'update click' ){
          this.activityService.patch({'id':activity.activityId,'description':this.updateActivity.controls['description'].value}).subscribe(
            activities => {
              this.ngOnInit();
            },
            error => {
              console.log( error );
            }
          );
        }
        this.closeResult = `Closed with: ${result}`;
        console.log( this.closeResult );
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        console.log( this.closeResult );
      });
    }
}
