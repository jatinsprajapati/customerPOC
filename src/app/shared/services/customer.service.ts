import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { serviceConfig } from "../../app.config";
@Injectable({ providedIn: 'root' })
export class CustomerService {
    constructor(private http: HttpClient) { }
     httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})};
    getCustomerlist() {
        return this.http.get(`${serviceConfig.apiUrl}/api/customer/getCustomerlist`);
    }
    getCustomerById(idDto: any) {
        return this.http.post(`${serviceConfig.apiUrl}/api/customer/getCustomerById`, idDto, this.httpOptions);
    }
    deleteCustomer(customer: any) {
        return this.http.post(`${serviceConfig.apiUrl}/api/customer/deleteCustomer`, customer, this.httpOptions);
    }
    saveCustomer(customer: any) {
        return this.http.post(`${serviceConfig.apiUrl}/api/customer/saveCustomer`, customer, this.httpOptions);
    }


}
