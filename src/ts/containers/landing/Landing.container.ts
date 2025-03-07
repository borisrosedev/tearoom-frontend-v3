import BaseContainer from "../../models/Base.container";
import buttonComponent from "../../ui/components/button/button.component";

export default class LandingContainer extends BaseContainer {
    constructor(onNavigate: (h: string) => void) {
        super(onNavigate)
        this.onInit()
    }

    onInit() {
        const landingSection = document.getElementById('landing-section') as HTMLElement
        setTimeout(() => {
            landingSection.innerHTML = buttonComponent({
                id: "landing-button",
                textContent: "Entrer dans notre salon de thé",
                classNames: "is-primary animate__animated animate__slideInUp"
            })
        }, 3000)
    }


    
}