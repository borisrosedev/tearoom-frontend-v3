import figureComponent from "../../components/figure/figure.component";

function landingPage() {
  return `
            <main id="landing-page" class="tearoom-main landing__main">
                <section id="landing-section">
                  ${figureComponent({
                    id: "landing-figure",
                    src: "/assets/images/logo.webp",
                    alt: "Image du logo de l'application TeaRoom",
                    classNames:
                      "animate__animated animate__slideInUp animate__slow",
                  })}
                </section>
            </main>
        `;
}

export default landingPage;
