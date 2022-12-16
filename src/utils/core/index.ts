import { LitElement, css as lit_css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// wrapper过的css函数
export const css = (less_template: unknown) =>
    lit_css`${unsafeCSS(less_template)}`;

// ui名字前缀
export const ui_name = `xtu`;
