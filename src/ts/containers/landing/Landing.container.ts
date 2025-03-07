import BaseContainer from "../../models/BaseContainer";
import buttonComponent from "../../ui/components/button/button.component";

export default class LandingContainer extends BaseContainer {
    constructor(onNavigate: (h: string) => void) {
        super(onNavigate)
        this.onInit()
    }

    onInit() {
        const landingSection = document.getElementById('landing-section') as HTMLElement
        const self = this
        setTimeout(() => {
            landingSection.innerHTML = buttonComponent({
                id: "landing-button",
                textContent: "Entrer dans notre salon de thé",
                classNames: "is-primary animate__animated animate__slideInUp"
            })

            const landingButton = document.getElementById('landing-button') as HTMLElement
            landingButton.addEventListener('click', self.onLandingButtonClick.bind(self))

        }, 3000)



    }

    onLandingButtonClick(){
        this.onNavigate('#home')
    }


    
}