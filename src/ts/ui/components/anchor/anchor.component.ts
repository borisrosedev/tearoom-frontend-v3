function anchorComponent({ href, content }) {
  return `
            <a href="${href}">${content}</a>
        `;
}

export default anchorComponent;
