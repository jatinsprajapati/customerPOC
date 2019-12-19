import { Component, OnInit, ViewChild  } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    constructor(private toastrService: ToastrService) {
    }

    ngOnInit() {
      
    }
}
