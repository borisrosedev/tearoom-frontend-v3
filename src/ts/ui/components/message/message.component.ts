function messageComponent({ id, header, body, classNames }) {
  return `
            <article id="${id}" class="message ${classNames ?? ""}">
                <section class="message-header">${header}</section>
                <section class="message-body">${body}</section>
            </article>
        
        `;
}

export default messageComponent;
