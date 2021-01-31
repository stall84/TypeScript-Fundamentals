# Typescript Notes Section 3 - Udemy Schwarmuller Course

## Typescript Compiler

### INIT and Watch Mode

- The first thing you'll want to do in a typescript project is tsc --init to tell the compiler that the entire project is a typescript project. This will create a tsconfig.json file with all of the options you may want to configure.

- Watch mode is a way to have the compiler _watch_ all of the .ts files for changes made on save, in which case the default behavior is then to recompile them all. (Instead of manually typing out tsc app.ts every single time)
