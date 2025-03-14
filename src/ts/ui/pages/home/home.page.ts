import figureComponent from "../../components/figure/figure.component"
import messageComponent from "../../components/message/message.component"

function homePage () {
    return(
        `
            <main id="home-main" class="tearoom-main home__main show">
                <section id="home-hero-section" class="home__hero-section">
                    <section class="home-hero-section__figure-section">
                        ${figureComponent({
                            id: "home-hero-section-figure",
                            src: "/assets/images/inside.webp",
                            alt: "Image de l'intérieur du salon de thé de TeaRoom"
                        })}
                    </section>
                    <section class="home-hero-section__usp-section">
                        ${messageComponent({
                            id: "home-hero-section-usp-message",
                            header: "Ce que les autres n'ont pas",
                            body: "Venez vous détendre dans une ambiance exceptionnelle mélangeant chic et élégance. Un endroit,où nos hôtes et hotesses d'accueil de qualité exemplaire, seront à vos petits soins.",
                            classNames: "is-primary"
                        })}
                    </section>
                </section>
            </main>
        
        `
    )
}

export default homePage