function notFoundPage () {
    return(
        `
            <main class="tearoom-main not-found__main">
                <section id="not-found-section">
                    <h1 class="animate__animated animate__swing">
                        404
                    </h1>
                    <p class="not-found__explanation">La page que vous essayez d'atteindre n'existe pas</p>
                    <a class="not-found__navlink" href="#home">Retour sur la page d'accueil</a>
                </section>
            </main>
        
        `
    )
}

export default notFoundPage