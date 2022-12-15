import { LitElement, html, unsafeCSS } from 'lit';
import { css } from '@utils/core';
import { customElement, property } from 'lit/decorators.js';
import styles from './lit-button.module.less';
@customElement('lit-simple')
export class SimpleGreeting extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css(styles);

    // Declare reactive properties
    @property()
    name?: string = 'World';

    // Render the UI as a function of component state
    render() {
        return html`<p class=${styles.locals.p}>Hello, ${this.name}!</p>`;
    }
}
