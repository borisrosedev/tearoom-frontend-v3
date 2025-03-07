function fieldComponent({ id, placeholder, type, classNames }: any) {
  return `
            <article class="field-component">

                <label for="${id}"></label>
                <input
                    id="${id}" 
                    class="input ${classNames ?? ""}"
                    type="${type ?? "text"}"
                    placeholder="${placeholder}"
                >
            
            </article>
        
        `;
}

export default fieldComponent;
