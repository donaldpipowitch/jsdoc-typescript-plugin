/// <reference path="./doclettypes.ts" />

module TsdPlugin {
    /**
     * Represents a JsDoc doclet, a parsed piece of documentation for a type, function
     * or member
     */
    export interface IDoclet {
        comment?: string;
        access?: string;
        description: string;
        classdesc?: string;
        params?: IDocletParameter[];
        returns?: IDocletTypeInfo[];
        tags?: IDocletTag[];
        name: string;
        longname: string;
        kind: string;
        memberof: string;
        scope: string;
        undocumented?: boolean;
        type?: IDocletType;
        augments?: string[];
        nullable?: boolean;
        inheritdoc?: boolean;
    }
}