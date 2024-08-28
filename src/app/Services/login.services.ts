import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AddUser, EmailVerify } from "../Constant/api.conts";

@Injectable({
    providedIn: 'root'
})
export class LoginServices {

    constructor(private http: HttpClient) { }

    veryfyEmail(Mail: string) {
        return this.http.get(`${EmailVerify}/${Mail}`);
    }

    addUser(data: void) {
        return this.http.post(AddUser, data);
    }

}