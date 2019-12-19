import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';



@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss'],
    animations: [routerTransition()]
})
export class CustomerListComponent implements OnInit {
    customerList: any = [];
    public mfDataTable;
    selectedId: any;
    constructor(private customerService: CustomerService, private toastr: ToastrService) { }


    ngOnInit() {
        //  this.customerList = [];
        this.getCustomerList();
        // this.showSuccess();
       // Swal.fire('Hello world!')
    }
    showSuccess() {
        this.toastr.success('Hello world!', 'Toastr fun!');
    }
    deleteCustomer(id: any) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {

                this.selectedId = id;
                var dto = {
                    id: id
                }
                this.customerService.deleteCustomer(dto).subscribe(data =>
                {
                    this.getCustomerList();
                    //    console.log(data);
                    Swal.fire(
                        'Deleted!',
                        'Your imaginary file has been deleted.',
                        'success'
                    )
                }

                );
                
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
             
            }

            

            //    Swal.fire(
            //        'Deleted!',
            //        'Your imaginary file has been deleted.',
            //        'success'
            //    )
            //    // For more information about handling dismissals please visit
            //    // https://sweetalert2.github.io/#handling-dismissals
            //} else if (result.dismiss === Swal.DismissReason.cancel) {
            //    Swal.fire(
            //        'Cancelled',
            //        'Your imaginary file is safe :)',
            //        'error'
            //    )
            //  }
        })
    }

    getCustomerList() {
        this.customerService.getCustomerlist().subscribe(data => {
            this.customerList = data;
           // console.log(this.customerList);
        });
    }
}
