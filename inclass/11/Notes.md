# Lesson 11 Notes

1. Open the terminal in the `~/inclass/11/demo/` folder.
1. Initialize (set up) a Node project - creates the `package.json`

    ```ps
    pnpm init
    ```

1. Add our project dependencies

    ```ps
    pnpm add -D -E vite
    pnpm add -E -D vitest jsdom
    pnpm add @picocss/pico -E
    ```

1. Edit the `package.json`

    ```diff
      "scripts" : {
    +   "dev": "vite",
    -   "test": "echo \"Error: no test specified\" && exit 1"
    +   "test": "vitest"
      }
    ```
