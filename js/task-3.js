function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = 2 * Number.parseFloat(padding);
    const borderWidth = 2 * Number.parseFloat(border);
    return contentWidth + paddingWidth + borderWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 