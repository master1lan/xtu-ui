import { LitElement, html } from 'lit';
import { css, tag, classname, getValue } from '@utils/core';
import styles from './button.less';
import { property } from 'lit/decorators.js';

/**
 * type define
 */
type Button_type = 'default' | 'primary' | 'warning';
type Button_size_type = 'small' | 'default' | 'large';
type Button_iconDirection = 'before' | 'after';
type Button_shape = 'square' | 'round' | 'circle';
interface CButton {
    type: Button_type;
    size: Button_size_type;
    disabled: boolean | string;
    icondireciton: Button_iconDirection;
    shape: Button_shape;
    loading: boolean;
    loadinginfo: string;
}
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
    @property({ type: Boolean })
    loading: boolean = false;
    @property({ type: String })
    loadinginfo: string = 'loading';
    // Render the UI as a function of component state
    render() {
        return html` <button class=${classname('button')}>
            <slot name="icon"></slot>
            ${getValue(
                this.loading,
                true,
                this.loadinginfo,
                html`<slot></slot>`
            )}
        </button>`;
    }
}
