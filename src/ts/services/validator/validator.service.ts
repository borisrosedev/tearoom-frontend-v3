import BaseService from "../../models/BaseService";


export default class ValidatorService extends BaseService {

    constructor(){
        super()
    }

    email(data: string){
        console.log('email')
        const pattern = new RegExp(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, 'i')
        return pattern.test(data)
    }

    password(data: string){
        const pattern = new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/)
        return pattern.test(data)
    }

}