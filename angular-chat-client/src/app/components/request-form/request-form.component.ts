import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { RequestsService } from 'src/app/services/requests.service';
import {Request} from '../../models/request.model';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private reqService:RequestsService) { }

  formvalue= this.fb.group({

// nothing by default, input required
amount:['',[Validators.required,Validators.pattern('^[+]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$')]],
category:['',Validators.required],
description:['',Validators.required]

  });

  ngOnInit() {
  }

  onSubmit(){
              // Pay load
    const request:Request=new Request(null,this.formvalue.value.amount,null,null,
                                this.formvalue.value.description,null,
                                Number(localStorage.getItem('currentUser.id')),
                                null,null,this.formvalue.value.category);

          this.reqService.create(request);

  }

}

/*constructor(rembId:number,amount:number,timeSubmitted:DateTime,timeResolved:DateTime,
  description:string,receipt:string,authorNumber:number,resolveNumber:number,
  statusId:number,typeId:number)*/