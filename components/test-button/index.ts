import styles from './test-button.module.less';
class XyButtonGroup extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>${styles}</style>
        <button class=${styles.locals.button}>测试一下</button>
        `;
    }
}

if (!customElements.get('xtu-button')) {
    customElements.define('xtu-button', XyButtonGroup);
}
