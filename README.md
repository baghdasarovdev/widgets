# Front End

## Overview

This is a Next.js 14 project utilizing modern features for a high-performance web application. It includes TypeScript for type safety, Yup for validation, and `next-intl` for multilingual support.

## Features

- **Server-Side Rendering (SSR)**: Improved SEO and faster initial load times.
- **API Routes**: Easily create backend endpoints.
- **Middleware**: Handle locale-based routing and redirections.
- **TypeScript**: Strong typing throughout the project.
- **Validation**: Use Yup for schema validation.
- **Internationalization**: Integration with `next-intl` for multiple languages.
- **CSS Modules**: Scoped and modular styling.

## Prerequisites

- Node.js (v14 or higher)
- pnpm (v9.7.1)

# Attention

## Setting Up Private Package Registry

To use private packages from GitHub Packages in your project, you need to configure your npm registry settings and generate a GitHub personal access token. Follow these steps:

### 1. Generate a GitHub Personal Access Token

1. **Log in to GitHub**: Go to [GitHub](https://github.com/) and sign in to your account.

2. **Navigate to Developer Settings**:

   - Click on your profile picture in the top-right corner of the page.
   - Select **Settings**.
   - In the left sidebar, click **Developer settings**.

3. **Create a New Personal Access Token**:

   - Click **Personal access tokens**.
   - Click the **Generate new token** button.
   - **Note**: For enhanced security, use a GitHub App instead of personal access tokens if possible.

4. **Configure the Token**:

   - **Token description**: Enter a description for the token (e.g., "NPM package access").
   - **Select scopes**: Check the boxes for the following scopes:
     - `read:packages` (Required for installing packages)
     - `delete:packages` (Optional, if you need to delete packages)
   - Optionally, you can select other scopes based on your needs.

5. **Generate the Token**:
   - Click **Generate token** at the bottom of the page.
   - **Important**: Copy the token and save it somewhere secure. You won’t be able to see it again.

### 2. Configure `.npmrc` for Private Package Registry

1. **Create a `.npmrc` file**: This file should be located in the root directory of your project.

2. **Add the following configuration to `.npmrc`**:

   ```ini
   @resido-fhm:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   ```

   - Replace `@resido-fhm` with the scope of your private packages.
   - Replace `YOUR_PERSONAL_ACCESS_TOKEN` with the token you generated in the previous step.

3. **Save the `.npmrc` file**.

After setting up the `.npmrc` file, you can install and publish packages from GitHub Packages as you would with any other npm registry.

### Important Notes

- Keep your `.npmrc` file secure and avoid committing it to version control if it contains sensitive information.
- Use environment variables or GitHub Actions secrets to handle tokens securely in CI/CD pipelines.

For more details on configuring npm with GitHub Packages, refer to [GitHub's documentation on npm package publishing](https://docs.github.com/en/packages/guides/publishing-and-managing-packages-with-npm).

- ** pnpm install**

## Development

Running the Development Server
Start the development server with:

```bash
pnpm run dev
```

- **Visit**: http://localhost:3000 in your browser to view the application in development mode.

# Building for Production

## Build the project for production with:

```bash
pnpm run build
```

Running the Production Server
Start the production server with:

```bash
pnpm run start
```

## Linting

Check for linting issues with:

```bash

pnpm run lint
```

Fix linting issues automatically with:

```bash
pnpm run lint:fix
```

Formatting
Check for formatting issues with:

```bash
pnpm run prettier:check
```

Fix formatting issues automatically with:

```bash
pnpm run prettier:fix
```

## Commands

- **lint**: Runs ESLint and Prettier checks.

```bash
pnpm run lint
```

- **lint:fix**: Fixes ESLint and Prettier issues.

```bash
pnpm run lint:fix
```

- **eslint:fix**: Fixes ESLint issues.

```bash
pnpm run eslint:fix
```

- **prettier:check**: Checks code formatting with Prettier.

```bash
pnpm run prettier:check
```

- **prettier:fix**: Fixes code formatting with Prettier.

```bash
pnpm run prettier:fix
```

## Configuration

- **Next.js Configuration**: Customize next.config.js for build and runtime settings.
- **TypeScript Configuration**: Adjust tsconfig.json for TypeScript settings.
- **Yup**: Configure validation schemas where needed.
- **next-intl**: Set up translations and locale management.

## CSS Modules

For styling, use CSS Modules. Define styles in .module.scss files and import them in your components:
`import styles from './Component.module.scss'`;
