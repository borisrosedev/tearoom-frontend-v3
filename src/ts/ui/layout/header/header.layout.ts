import anchorComponent from "../../components/anchor/anchor.component"
import figureComponent from "../../components/figure/figure.component"

function headerLayout () {

    return(
        `
            <header class="tearoom-header">
                ${anchorComponent({
                    href: "",
                    content: figureComponent({
                        id: "header-logo-figure",
                        src: "/assets/images/logo.webp",
                        alt: "Image du logo de l'application TeaRoom"
                    })
                })}
                <nav id="header-navbar"></nav>
            </header>
        
        `
    )
}

export default headerLayout