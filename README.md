# Sparkpress

This is a starter template to speed up WordPress development. It handles most of the basic steps required to work with WordPress when developing themes or plugins, and it's built to be flexible so you can spend more time building the thing than messing with configuration.

## Prerequisites

This project requires [Docker](https://docs.docker.com/engine/install/) and [Node.js](https://nodejs.org/en). If you are on Windows, you will likely need to have Git Bash installed and [set up as your default terminal if using VS Code](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_git-bash-on-windows). You may also need to run `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe` for some scripts to work.

## Getting Started

Rather than providing an example theme or plugin that you can modify to make your own, this starter template provides generators for adding functionality when you need to. Following these steps will get you up and running quickly, assuming you're working on developing a block theme.

1. Run `npm install`
1. Run `npm run generate:block-theme`
1. Answer the prompts to provide details about your theme and opt in or out of certain features
1. Copy `.env.example` to `.env` and update values as needed (see comments for instructions)
1. Run `npm start`
1. Visit `http://localhost:8080` and follow the WordPress installation steps
1. Log in with your newly created admin account, and you should have a functioning WordPress site

If you are working on a plugin and would rather use a theme that comes with WordPress, you can delete the line in `Dockerfile` that includes `rm -rf /tmp/wordpress/wp-content/themes/*`. This will let you use a default theme like `twentytwentyfour` if you want. You also won't need to generate a theme if you take this approach.

## Customizing the Project

Since this project uses generators, there are only a handful of places that need to be updated to remove references to the Sparkpress starter template. You should replace them with your own project/author details before getting too deep into the project.

- `composer.json`: update the `name` field
- `package.json`: update the `name` field, then run `npm install` to update `package-lock.json`
- `release-please`: update the `package-name` field (or delete the workflow if you don't plan on using [Release Please](https://github.com/googleapis/release-please))
- `README.md`: update this file to remove references to Sparkpress or any starter template info that your project doesn't need

## Project Structure

At a high level, this is how the project is organized by folder:

- `.github`: contains workflows for managing continuous integration and deployment processes as well as other GitHub configurations
- `generators`: contains generators used for creating files needed for supporting new functionality
- `scripts`: contains shell scripts used for importing and exporting databases and uploads, as well as running PHP commands within a docker container
- `src`: anything that directly contributes to WordPress themes or plugins goes in here
- Everything else: mostly configuration files for the various tools involved for building/linting/testing

Within the `src` folder, you may notice a recurring pattern. `src` contains a `plugins` folder and a `theme` folder, and so does `src/js` and `src/scss`. The purpose of this structure is to establish a convention that makes it easy for both developers and build tools to know which JavaScript and SCSS files are used for which plugins or themes.

For example, if you create a theme called "Flamingo", the files should be organized such that the SCSS, JS, and theme files live in `src/scss/themes/flamingo`, `src/js/themes/flamingo`, and `src/themes/flamingo`, respectively. `npm run generate:block-theme` will take care of this for you if you choose to scaffold SCSS and JS.

The build tools for SCSS and JS use glob syntax to find any entry point files and build them to a corresponding path in the `dist` folder when building your themes or plugins. Because of this flexibility, it's best to put helper files in a directory outside of `src/js/themes` or `src/js/plugins`, so they don't get picked up as entry points unnecessarily.
