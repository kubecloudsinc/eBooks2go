# Steps for initial setup
- make yarn your package manager
- if using VSCode add this to .vscode>settings.json

      `
      {
            "typescript.tsserver.npm": "yarn",
            "eslint.packageManager": "yarn",
            "npm.packageManager": "yarn",
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": true,
            "files.exclude": {
            "node_modules": false
            }
      }
      `

- The project uses yarn2+ berry so we need to force it to use node_modules otherwise cypress will not be detected
      - so before first time yarn install run the following command

            `
            yarn config set nodeLinker node-modules
            yarn install
            `

- run the script in the folder. always use gitBash

      `./run install`

- corepack will be enabled for yarn
      - Note: Always open VSCode as administrator so that the commands in git bash or cmd run without any errors
              Make sure that when opening the code for the first time that the following are not present
              .yarn node_modules downloads cypress folder if present delete it
              .yarnrc.yml yarn.lock if present delete it