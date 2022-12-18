import { css as lit_css, html, unsafeCSS } from 'lit';
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

/**
 * 封装class，注意所有的class应该都以-分割
 */
export const classname = (default_name: string, active_after: string) => {
    return `${default_name}
    ${isEmpty(active_after) ? null : default_name + '-' + active_after}`;
};

/**
 *检查是否为空
 */
export function isEmpty(val: unknown) {
    return !(!!val
        ? typeof val === 'object'
            ? Array.isArray(val)
                ? !!val.length
                : !!Object.keys(val).length
            : true
        : false);
}
