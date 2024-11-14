# Next.js Boilerplate

This is a boilerplate project built with Next.js, designed to serve as a quick starting point for modern frontend applications. The project is set up with ESLint 9 and Tailwind CSS, including Tailwind animations for enhanced UI effects.

## Description

This boilerplate includes a basic Next.js setup optimized for rapid development, with custom configurations for ESLint and Prettier to maintain clean and standardized code. The addition of Tailwind CSS with animation support allows for easy creation of stylish and modern designs.

## Demo Video

[![Demo](link_to_demo_image)](link_to_demo_video)

Click the image above to watch a quick demo of the project in action.

## Installation and Setup

To install and run the project locally, follow these steps:

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/your_user/your_repository.git
    ```
2. Navigate to the project directory.
    ```bash
    cd your_repository
    ```
3. Install the dependencies with your preferred package manager. Here, we use `bun` as an example:
    ```bash
    bun install
    ```

4. Start the development server.
    ```bash
    bun dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.


## ESLint Configuration

This project uses ESLint 9 with custom rules to ensure consistent and error-free code. Additionally, ESLint is configured to work with Prettier, allowing seamless integration with Tailwind CSS.

To run ESLint without warnings:
```bash
bun lint
```
To automatically fix linting errors:
```bash
bun lint:fix
```

## Packages

- [ESLint 9](https://eslint.org/): A powerful linter for enforcing code quality and consistency, with Next.js and Prettier integrations.
- [Prettier](https://prettier.io/): A code formatter to keep your code style consistent and readable.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development with customizable styles.
- [Tailwind Animate](https://github.com/tailwindlabs/tailwindcss-animate): Adds animation utilities to Tailwind CSS for easy and customizable animations.
- [Zustand](https://github.com/pmndrs/zustand): A small, fast, and flexible state management library for React, making it easy to manage global and local state in components.
- [lucide-react](https://lucide.dev/): A collection of beautifully crafted, customizable React icons, perfect for modern UI design.
