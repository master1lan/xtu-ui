import { LitElement, html } from 'lit';
import { css, ui_name } from '@utils/core';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './button.module.less';
@customElement(`${ui_name}-button`)
export class ButtonComponent extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css(styles);
    // Declare reactive properties
    @property()
    name?: string = 'World';
    @state()
    cnt = 0;
    // Render the UI as a function of component state
    render() {
        return html`<button
            @click=${() => this.cnt++}
            class=${styles.locals.button}>
            <!-- <slot></slot> -->
            ${this.cnt}
        </button>`;
    }
}
