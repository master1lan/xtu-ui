declare module '*.module.less' {
    const classes: {
        locals: { [key: string]: string };
        use: ({ target }) => void;
        [key: string]: string;
    };
    export default classes;
}
declare module '*.less';
