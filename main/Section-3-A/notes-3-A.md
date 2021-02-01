# Typescript Notes Section 3 - Udemy Schwarmuller Course

## Typescript Compiler

### INIT and Watch Mode

- The first thing you'll want to do in a typescript project is tsc --init to tell the compiler that the entire project is a typescript project. This will create a tsconfig.json file with all of the options you may want to configure.

- Watch mode is a way to have the compiler _watch_ all of the .ts files for changes made on save, in which case the default behavior is then to recompile them all. (Instead of manually typing out tsc app.ts every single time)

### Selected Compiler Configuration Options

#### target

- Specify the output version of javascript the ts compiler will translate to. The current default is es3, but is usually set as es5. Can be set to any newer version

#### lib[]

- Explicitly list which libraries to use during compilation. The defaults are currently 'dom', 'dom.iterable', 'es6', 'scripthost'

#### allowJS / checkJS

- If you want to use the ts compiler but with regular javascript files

#### jsx

- For react

#### declarations / declarationsMap

- For use if you're building a package for distibution. Basically manifests for your types

#### sourceMap

- Useful option that will map your original TS files to the browser's 'source' debugging feature. Allows easy debugging of your direct TS files

#### outFile / outDir / rootDir

- Tell TS compiler _where_ compiled files should be stored with outDir
- options for cleaning and organizing your file structures
- rootDir specifies where the TS compiler looks and makes sure the structure is the same in your dist folder

#### removeComments / noEmit

- Remove comments from the compiled JS file for size considerations
- noEmit will not create any JS files on compile, useful for just checking TS

#### downlevelIterations

- only turn on if you're having issues with loops

#### noEmitOnError

- default is not shown/false. Could be useful because it will not write any JS files on a compilation error. The default is for TS compiler to create the JS file _even when there is an error_ .. This might not be what you want to be doing

### Strict Type-Checking Options

#### strict

- Sets all the following options as true when true (default)

#### noImplicitAny

- Ensures we have to be clear about the values we're working with in our code. Will throw a compile error if the compiler cannot infer the type (meaning it types it as 'any')

#### strictNullChecks

- Tells TS Compiler to throw warning/errors on compile when a value or **_element especially_** might be null at runtime. Classic example is doc query-selecting a button.. TS can't look into your html file so it has no idea if that button actually exists at compile time. You can work around this error when it's enabled by using the **_!_** operator

#### strictFunctionTypes

- Usually a niche setting.

#### strictBindCallApply

- when binding functions

#### alwaysStrict

- Controls whether emitted JS Files all start with "use strict"
