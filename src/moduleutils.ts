module TsdPlugin {
    /**
     * Module helper utility
     */
    export class ModuleUtils {
        /**
         * Gets whether this module name is an AMD one
         */
        public static isAMD(name: string): boolean {
            return name.indexOf("/") >= 0;
        }
        
        /**
         * Writes the TS module tree out to the specified output stream
         */
        public static outputTsd(module: ITSModule, stream: IndentedOutputStream): void {
            for (var type of module.types) {
                type.output(stream);
            }
            for (var moduleName in module.children) {
                var child = module.children[moduleName];
                //Root modules have to be declared
                var decl = ((child.isRoot === true) ? "declare " : "");
                //Write module decl
                if (ModuleUtils.isAMD(moduleName)) {
                    stream.writeln(`${decl}module "${moduleName}" {`)
                } else {
                    stream.writeln(`${decl}module ${moduleName} {`);
                }
                stream.indent();
                ModuleUtils.outputTsd(child, stream);
                stream.unindent();
                stream.writeln("}");
            }
        }
    }
}