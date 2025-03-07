import BaseContainer from "../../models/Base.container";

export default class LoginContainer extends BaseContainer{
    constructor(onNavigate: (h:string) => void){
        super(onNavigate)
    }
}