import { LitElement, css as lit_css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export const css = (less_template: unknown) =>
    lit_css`${unsafeCSS(less_template)}`;
