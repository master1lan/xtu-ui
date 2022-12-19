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

function _link_classname(per: string, after: string) {
    return isEmpty(after) ? null : `${per}-${after}`;
}
/**
 * 封装class，注意所有的class应该都以-分割
 * ```js
 * classname('button','success') //`button button-success`
 * classname('button','success','round') //`button button-success button-round`
 * ```
 *
 */
export const classname = (default_name: string, ...res_after: string[]) => {
    return res_after.reduce(
        (str, value) => `${str} ${_link_classname(default_name, value)}`,
        default_name
    );
};
/**
 * 消灭三元判断符
 */
export function getValue<T>(
    assertValue: T,
    patternValue: T,
    trueValue: unknown,
    falseValue: unknown
) {
    if (assertValue === patternValue) {
        return trueValue;
    }
    return falseValue;
}

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
