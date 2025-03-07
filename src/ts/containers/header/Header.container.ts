import BaseContainer from "../../models/BaseContainer";
import anchorComponent from "../../ui/components/anchor/anchor.component";

export default class HeaderContainer extends BaseContainer {
    headerNavBar: HTMLElement
    
    constructor(onNavigate: (h:string) => void){
        super(onNavigate)
        this.onInit()

    }

    onInit(){
        this.headerNavBar = document.getElementById('header-navbar')

        if(window.location.hash == "#login"){
            this.headerNavBar.innerHTML  += anchorComponent({
                href: "#register",
                content: "Inscription"
            }) 
        } else if(window.location.hash == "#register") {
            this.headerNavBar.innerHTML += anchorComponent({
                href:"#login",
                content: "Connexion"
            })
        } else {
            this.headerNavBar.innerHTML  += anchorComponent({
                href: "#login",
                content: "Connexion"
            }) + "<span>|</span>" + anchorComponent({
                href: "#register",
                content: "Inscription"
            })
        }

        
       
    }
}