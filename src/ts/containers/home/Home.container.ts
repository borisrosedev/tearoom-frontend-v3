import BaseContainer from "../../models/Base.container";



export default class HomeContainer extends BaseContainer {
    constructor(onNavigate: (h:string) => void){
        super(onNavigate)
    }
}