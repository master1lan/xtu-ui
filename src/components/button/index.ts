import { LitElement, html } from 'lit';
import { css, tag } from '@utils/core';
import styles from './button.less';
@tag('button')
export class ButtonComponent extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css(styles);
    // Declare reactive properties
    /*property和state有什么区别？
    <xtu-button name="1" cnt="1"></xtu-button>
    上面的例子中，name可以接收到，但是cnt无法接收
    @property()
    name: number = 0;
    @state()
    cnt = 0;
    */
    // Render the UI as a function of component state
    render() {
        return html` <button class="button">
            <slot></slot>
        </button>`;
    }
}
