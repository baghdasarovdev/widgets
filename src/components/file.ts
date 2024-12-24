class CSSInlinePackager {
  async process(cssAssets) {
    const cssString = cssAssets.map((asset) => asset.content).join("\n");

    const jsContent = `
         var style = document.createElement('style');
         style.type = 'text/css';
         style.appendChild(document.createTextNode(\`${cssString}\`));
         document.head.appendChild(style);
       `;

    return jsContent; // Return JavaScript to inject CSS
  }
}
