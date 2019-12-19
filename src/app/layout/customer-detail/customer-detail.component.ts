import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
    @Output() refreshData = new EventEmitter<boolean>();
    myForm: FormGroup;
    customerId: any = 0;
    profile: any = [];
    constructor(private frmBuilder: FormBuilder,
        private router: Router,
        private customerService: CustomerService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            this.customerId = id;
            if (this.customerId>0)
                    this.getCustomerById(id);
        });
    }

    ngOnInit() {
        this.createForm();
    }

    getCustomerById(id: any) {
        var data = {
            id: id
        };
        this.customerService.getCustomerById(data).subscribe(data => {
            this.profile = data;
            this.patchFormValues();
         //   console.log(this.profile);
        });
    }

    createForm() {
        this.myForm = this.frmBuilder.group({
            id: new FormControl(''),
            creditAcct: new FormControl('', Validators.required),
            debitAcct: new FormControl(''),
            fullName: new FormControl('', Validators.required),
            isAgent: new FormControl(false),
            isDelivery: new FormControl(false),
            isPickup: new FormControl(false),
            isVendor: new FormControl(false),
            salesAgent: new FormControl(''),
            shortName: new FormControl(''),          
        });
    }
    patchFormValues() {
        this.myForm.patchValue({
            id: this.customerId,          
            creditAcct: this.profile.creditAcct,
            debitAcct: this.profile.debitAcct,
            fullName: this.profile.fullName,
            isAgent: this.profile.isAgent,
            isDelivery: this.profile.isDelivery,
            isPickup: this.profile.isPickup,
            isVendor: this.profile.isVendor,
            salesAgent: this.profile.salesAgent,
            shortName: this.profile.shortName,
           
        });
        this.myForm.patchValue({
            email: this.profile.email,
        }, { emitEvent: false, onlySelf: true });
    }
    onSubmit() {
        let _updateCustomer = {};      
        _updateCustomer = {
            id: this.customerId,
            creditAcct: this.myForm.value.creditAcct,
            debitAcct: this.myForm.value.debitAcct,
            fullName: this.myForm.value.fullName,
            isAgent: this.myForm.value.isAgent,
            isDelivery: this.myForm.value.isDelivery,
            isPickup: this.myForm.value.isPickup,
            isVendor: this.myForm.value.isVendor,
            salesAgent: this.myForm.value.salesAgent,
            shortName: this.myForm.value.shortName,
        }
        //nsole.log(_updateCustomer);
        this.customerService.saveCustomer(_updateCustomer).subscribe(data => {       

         //   this.toastr.pop(this.toaster.success, "Success", "Customer Details are updated successfully.");
            this.toastr.success("Success", "Details saved successfully.");
            this.router.navigate(["/"]);
            this.refreshData.emit(true);

        });
    }
    resetForm() {
        if (this.customerId > 0) {
            this.getCustomerById(this.customerId);
        }
        else
            this.myForm.reset();
    }
}
