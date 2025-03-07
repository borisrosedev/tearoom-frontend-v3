import BaseContainer from "../../models/Base.container";
import anchorComponent from "../../ui/components/anchor/anchor.component";

export default class HeaderContainer extends BaseContainer {
    headerNavBar: HTMLElement
    
    constructor(onNavigate: (h:string) => void){
        super(onNavigate)
        this.onInit()

    }

    onInit(){
        this.headerNavBar = document.getElementById('header-navbar')
        this.headerNavBar.innerHTML += anchorComponent({
            href:"#login",
            content: "Connexion"
        })
        + "<span aria-label='separation entre les propositions de navigation'>|</span>" + anchorComponent({
            href: "#register",
            content: "Inscription"
        }) 
    }
}