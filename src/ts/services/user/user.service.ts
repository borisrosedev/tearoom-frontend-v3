import BaseService from "../../models/BaseService";


export default class UserService extends BaseService {
    constructor(){
        super()
    }

    async register({ email, password }){

        try {
            const serverResponse = await fetch('http://localhost:3000/api/v1/user', {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ email, password })
            })

            const message = serverResponse.json()
            this.logger(message)

        } catch(err){
            this.logger(err)
        }
       


    }
}