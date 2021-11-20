import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/core/models/user";




@Injectable()
export class AuthService {

    first:string='mavi';
    second:string='pa$$w0rd';
    currentUser:User={};

    constructor(private http:HttpClient) {

    }

    login(email:string, password:string): User {
        //return this.http.post<User>('/api/login', {email,password});       
         
        if(email ==this.first && password == this.second)
        {
            this.currentUser.email= email;
            this.currentUser.id ='1';
            this.currentUser.valid=true;
            
        }
        else
        this.currentUser.valid = false;


        return this.currentUser;
        
        }
    
}

