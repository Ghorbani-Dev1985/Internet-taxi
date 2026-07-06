export declare const configurations: (((() => {
    username: string;
    password: string;
    database: string;
    host: string;
    port: string;
    dialect: string;
}) & import("node_modules/@nestjs/config").ConfigFactoryKeyHost<{
    username: string;
    password: string;
    database: string;
    host: string;
    port: string;
    dialect: string;
}>) | ((() => {
    host: string;
    port: string;
    cacheDb: number;
    sessionDb: number;
}) & import("node_modules/@nestjs/config").ConfigFactoryKeyHost<{
    host: string;
    port: string;
    cacheDb: number;
    sessionDb: number;
}>))[];
