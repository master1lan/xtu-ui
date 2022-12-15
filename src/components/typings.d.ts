declare module '*.module.less' {
    const classes: {
        locals: { [key: string]: string };
        toString: () => TemplateStringsArray;
        [key: string]: string;
    };
    export default classes;
}
declare module '*.less';
