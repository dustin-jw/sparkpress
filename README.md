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

If you are working on a plugin and would rather use a theme that comes with WordPress, you can delete the line in `Dockerfile` that includes `rm -rf /tmp/wordpress/wp-content/themes/*`. This will let you use a default theme like `twentytwentyfour` if you want. You also won't need to generate a theme if you take this approach. Note: any time you change `Dockerfile`, you should run `docker compose build` to make sure your container picks up the changes.

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

### SCSS and JS

Within the `src` folder, you may notice a recurring pattern. `src` contains a `plugins` folder and a `theme` folder, and so does `src/js` and `src/scss`. The purpose of this structure is to establish a convention that makes it easy for both developers and build tools to know which JavaScript and SCSS files are used for which plugins or themes.

For example, if you create a theme called "Flamingo", the files should be organized such that the SCSS, JS, and theme files live in `src/scss/themes/flamingo`, `src/js/themes/flamingo`, and `src/themes/flamingo`, respectively. `npm run generate:block-theme` will take care of this for you if you choose to scaffold SCSS and JS.

The build tools for SCSS and JS use glob syntax to find any entry point files and build them to a corresponding path in the `dist` folder when building your themes or plugins. Because of this flexibility, it's best to put helper files in a directory outside of `src/js/themes` or `src/js/plugins`, so they don't get picked up as entry points unnecessarily.

### Volume Mapping

During the build/development process, the `src/plugins` and `src/themes` folders are copied into a `dist` folder. To make those plugins and themes available in Docker, they must be included in the `volumes` list in `docker-compose.yml`, mapping to the `/var/www/html/wp-content/plugins` and `/var/www/html/wp-content/themes` folders individually.

For example, the aforementioned "Flamingo" theme would need to be mapped like so:

```yml
version: '3.8'
services:
  web:
    volumes:
      - './dist/themes/flamingo:/var/www/html/wp-content/themes/flamingo'
```

The plugins and themes must be mapped individually like this to avoid wiping out any third-party plugins or themes included via Composer. If the volume mapping was changed to `./dist/themes:/var/www/html/wp-content/themes`, only the themes from the `dist` folder would end up in the container. That might be fine, depending on whether you're using third-party or default WordPress themes, but it's probably best to avoid the issue altogether.

## Generators

To simplify adding functionality, this project uses generators to handle creating new files that ideally match WordPress best practices. The goal is to simplify and standardize as much as possible to take the guesswork out of common tasks, which will allow for more time spent on building out project-specific functionality.

### Block Theme

The generator for block themes will prompt you for details about your theme that it will use to scaffold a new, mostly unopinionated block theme with minimal styling. If you accept all the defaults, it should be fully featured enough to pass the tests from the [Theme Check plugin](https://wordpress.org/plugins/theme-check/). If you opt out of certain features, like comments or certain page templates, you may need to fill in some gaps or make it clear that your theme has limited support for core features.

```sh
npm run generate:block-theme
```

You should check each of the files that are created to make sure they accurately reflect your theme, including the WordPress and PHP versions that the theme is compatible with. You will definitely need to change the `screenshot.png` file that gets created, unless for some reason you keep the styles exactly the same for your new theme. It would be best to do this once your theme is mostly finalized, and the ideal dimensions are 1600px by 900px.

For best practices for working with block themes, read the [Theme Handbook](https://developer.wordpress.org/themes/), and for examples of official block themes from WordPress, see the [twentytwentythree](https://core.trac.wordpress.org/browser/trunk/src/wp-content/themes/twentytwentythree?order=name) and [twentytwentyfour](https://core.trac.wordpress.org/browser/trunk/src/wp-content/themes/twentytwentyfour) themes.

### Creating a New Generator

Generators are written as Node.js scripts that use [`prompts`](https://github.com/terkelg/prompts) to handle gathering input from users for anything that is configurable about the code being generated. The answers to those questions should be used to customize the templates for files that are written.

It's easiest to write a generator if you know what the end result should be. For example, the block theme generator was written after creating a block theme that covered all of the functionality that a basic block theme would need. From there, anything that was specific to the theme or might be considered optional informed the questions needed for generating a new theme.

For the most part, templates use string interpolation and the `writeToFile` helper to write that string to a file with a given directoryz and name. For some special cases, a generator needs to update an existing file, like `docker-compose.yml`, but most of the time, a generator should write new files.

If you have an idea for a generator that would be helpful, you can create a new issue or submit a pull request to add one.

## Deployment

There are GitHub Action workflows for deploying to Pantheon or for creating a Docker image that gets stored in the GitHub Container Registry. By default, these workflows will not run unless you opt-in by setting some variables and/or secrets in GitHub.

### Docker Deployment

The `deploy.docker.yml` workflow handles creating a Docker image and pushing it to the GitHub Container Registry, tagging each release as `latest`. To opt in to this workflow, go to Settings > Secrets and variables > Actions, then choose the Variables tab. Add a new repository variable called `DEPLOY_WITH_DOCKER` with a value of "true" to enable the Docker deployment workflow.

You will also need to go to Settings > Actions > General to give the `GITHUB_TOKEN` read and write permissions so it can be used to push to the GitHub Container Registry.

Once enabled, the next push to `main` should trigger the job to run and create the package.

### Pantheon Deployment

If you're using Pantheon for hosting your WordPress site, you'll need to go through some additional steps to enable automatic deployment to Pantheon.

#### Setting up Pantheon

Pantheon maintains its own git remote, which is separate from this repo. The deployment workflow pulls that remote, applies our changes to it, then commits and pushes the updates to the Pantheon remote. Before enabling the workflow, you'll need to do the following:

1. Enable autoloading vendor dependencies
    1. In the Pantheon dashboard for your site, set the Development Mode to Git instead of SFTP
    1. Clone the Pantheon repo
    1. At the top of the Pantheon repo's `wp-config.php` file, just below the opening `<?php` line, add this line: `require __DIR__ . '/vendor/autoload.php'`
    1. Commit the change and push to Pantheon's `master branch`
1. Generate an SSH key
    1. Follow the steps in [this guide](https://docs.pantheon.io/ssh-keys#generate-an-ssh-key) to generate an SSH key
    1. Run `ssh-add ~/.ssh/id_rsa`, replacing `id_rsa` with the name of the key you generated
    1. SSH into the Pantheon server with a command like `ssh ssh://<server-address>.drush.in:2222` (you should be able to find the connection info in Pantheon)
    1. When prompted to accept the server's fingerprint, type `yes` and press enter
    1. Check your `~/.ssh/known_hosts` file for a new entry, you'll need this for GitHub secrets in the next step
1. Set GitHub secrets (Settings > Secrets and variables > Actions, Secrets tab)
    1. `PANTHEON_ID_RSA`: the private SSH key generated in the previous step
    1. `KNOWN_HOSTS`: the new entry in `~/.ssh/known_hosts` (copy the whole line)
    1. `PRODUCTION_USER_EMAIL`: the email address used for Pantheon commit messages
    1. `PRODUCTION_USER_NAME`: the name of the user used for Pantheon commit messages
    1. `PRODUCTION_REPO`: the URL of the Pantheon git remote (you should be able to find this in Pantheon with a URL that starts with `ssh://` and ends with `.git`)
1. Enable the workflow by setting `DEPLOY_TO_PANTHEON` to "true" in Settings > Secrets and variables > Actions, Variables tab

### Releases

This project includes a workflow for Release Please, which you can use to generate release notes and tag versions based on commits to `main`. When enabled, this will allow a bot to create PRs that bump version numbers and generate a changelog based on commit messages (following conventional commits).

To enable Release Please, go to Settings > Secrets and variables > Actions, then go to the Variables tab and add a new variable called `TAG_RELEASES` with a value of "true". You will also need to go to Settings > Actions > General and check the box to allow GitHub Actions to create and approve pull requests.
