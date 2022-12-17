import { css as lit_css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
// wrapper过的css函数
export const css = (less_template: unknown) =>
    lit_css`${unsafeCSS(less_template)}`;

// ui名字前缀
export const ui_name = `xtu`;

type GetHocParameters<T> = T extends (arg: any) => (arg: infer HocP) => any
    ? HocP
    : any;
//封装customElement
export const tag =
    (tag_name: string) =>
    (classOrDescriptor: GetHocParameters<typeof customElement>) =>
        customElement(`${ui_name}-${tag_name}`)(classOrDescriptor);
