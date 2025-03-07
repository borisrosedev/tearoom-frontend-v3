import BaseContainer from "../../models/BaseContainer";



export default class HomeContainer extends BaseContainer {
    constructor(onNavigate: (h:string) => void){
        super(onNavigate)
    }
}