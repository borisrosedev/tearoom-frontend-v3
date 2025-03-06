function figureComponent ({ id, src, alt, name, url, classNames }: any) {
    return(
        `
            <figure id="${id}" class="figure-component ${classNames ?? ''}">
                <img src="${src ?? url}" alt="${alt ?? name}" />
            </figure>
        `
    )
}

export default figureComponent