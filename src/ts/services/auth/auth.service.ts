import BaseService from "../../models/BaseService";


export default class AuthService extends BaseService {
    
    constructor(){
        super()
    }


    async login({ email, password }){
        console.log(email, password)
        this.logger([email, password], 3)
    }

    logout(){
        
    }


}
