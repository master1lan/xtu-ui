import { LitElement, html } from 'lit';
import { css, tag } from '@utils/core';
import { property, state } from 'lit/decorators.js';
import styles from './button.module.less';
@tag('button')
export class ButtonComponent extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css(styles);
    // Declare reactive properties
    /*property和state有什么区别？
    <xtu-button name="1" cnt="1"></xtu-button>
    上面的例子中，name可以接收到，但是cnt无法接收
    */
    @property()
    name?: string = 'World';
    @state()
    cnt = 0;
    // Render the UI as a function of component state
    render() {
        return html`<button
            @click=${() => this.cnt++}
            class=${styles.locals.button}>
            <slot></slot>
            ${this.cnt} ${this.name}
        </button>`;
    }
}
