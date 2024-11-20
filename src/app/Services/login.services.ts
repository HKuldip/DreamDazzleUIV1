import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { addUser, EmailVerify, ForgotPassword, resetPassword, UserLogin } from "../Constant/api.conts";

@Injectable({
    providedIn: 'root'
})
export class LoginServices {


    constructor(private http: HttpClient) { }

    veryfyEmail(Mail: string) {
      
        return this.http.get(`${EmailVerify}/${Mail}`);
        
    }

    addUser(data: void) {

        return this.http.post(addUser, data);
    }
    UserLogin(login : any)
    {
        return this.http.post(UserLogin,login);

    }
    ForgotPassword(Mail: string) {
   
        return this.http.get(`${ForgotPassword}/${Mail}`);
    }
    
    resetPassword(data: void) {
      
        return this.http.post(resetPassword,data);
    }
   
  
}