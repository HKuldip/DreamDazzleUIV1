import { environment } from "../../environments/environment";

export const BaseURI = environment.BaseURI;
export const AddUser = BaseURI + 'User/AddUsers';
export const EmailVerify = BaseURI + 'User/EmailVerify';