# Contributing to React Template by SnowDev

First off, thank you for considering contributing to this template! 🎉

The following is a set of guidelines for contributing to this React template. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible using our bug report template.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please use our feature request template and include:

- A clear and descriptive title
- A detailed description of the proposed enhancement
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Pull Requests

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Add tests if applicable
5. Ensure the test suite passes
6. Make sure your code lints
7. Submit a pull request

## Development Setup

1. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/My-React-APP_Template-SnowDev.git
   cd My-React-APP_Template-SnowDev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment:**
   ```bash
   cp .env.template .env
   # Edit .env with your local configuration
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Run linting:**
   ```bash
   npm run lint
   ```

## Pull Request Process

1. **Update documentation** - Update the README.md with details of changes if applicable
2. **Follow the style guidelines** - Ensure your code follows our coding standards
3. **Write meaningful commit messages** - Follow our commit message conventions
4. **Test your changes** - Make sure everything works as expected
5. **Update version numbers** - Update version numbers in package.json if applicable

### Pull Request Template

When submitting a pull request, please include:

- **Description**: What does this PR do?
- **Type of change**: Bug fix, new feature, breaking change, documentation update
- **Testing**: How has this been tested?
- **Checklist**: Use our PR checklist

## Style Guidelines

### TypeScript

- Use TypeScript for all new files
- Prefer interfaces over types when possible
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### React

- Use functional components with hooks
- Follow the existing component structure
- Use proper TypeScript typing for props
- Implement proper error boundaries where needed

### CSS/Styling

- Use TailwindCSS utility classes
- Follow the existing layer structure (@layer base, components, utilities)
- Use CSS custom properties for theming
- Ensure mobile-first responsive design

### File Organization

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (ShadCN)
│   └── common/         # Common app components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── constants/          # App constants
```

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples
```bash
feat(components): add dark mode toggle component
fix(api): handle error when user is not authenticated
docs(readme): update installation instructions
style(button): improve button hover states
refactor(utils): simplify date formatting function
```

## Recognition

Contributors will be recognized in our README.md file and release notes. Thank you for making this template better for everyone!

## Questions?

Don't hesitate to reach out if you have questions:
- Open an issue with the "question" label
- Contact @DimitriTedom on GitHub

Thank you for contributing! 🚀