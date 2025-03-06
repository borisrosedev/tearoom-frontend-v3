import figureComponent from "../../components/figure/figure.component";

function landingPage() {
  return `
            <main id="landing-page" class="tearoom-main landing__main">
                ${figureComponent({
                  id: "landing-figure",
                  src: "/assets/images/logo.webp",
                  alt: "Image du logo de l'application TeaRoom",
                  classNames:
                    "animate__animated animate__slideInUp animate__slow",
                })}
            </main>
        `;
}

export default landingPage;
