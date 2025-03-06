function buttonComponent ( { id, type, textContent, classNames }:any ) {

    return (
        `
            <button
                id="${id}"
                type="${type ?? 'button'}"
                class="button ${classNames ?? ''}"
            >${textContent}</button>
        
        `
    )

}

export default buttonComponent