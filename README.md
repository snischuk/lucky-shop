# Lucky Shop Frontend

This is a frontend project for Lucky Shop, built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 How to start

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Start development server**  
   ```bash
   npm run dev
   ```

3. **Lint and format code**  
   Automatically handled before each commit with Husky hooks. You can also run manually:
   ```bash
   npm run lint
   ```

4. **Build for production**  
   ```bash
   npm run build
   ```

## 🧪 Git hooks with Husky

We use [Husky](https://typicode.github.io/husky/#/) to enforce project conventions:

### ✅ Pre-commit:
- Runs `eslint --fix` and `prettier --write` on staged files.
- Validates commit message format:
  ```
  type: description
  ```
  Allowed types: `init`, `feat`, `fix`, `refactor`, `docs`, `style`, `chore`  
  Examples:
  - `feat: add login form`
  - `fix: adjust header spacing`
  - `chore: configure husky hooks`

### ✅ Pre-push:
- Validates branch naming convention:
  ```
  feature/branch-name
  bugfix/fix-description
  hotfix/critical-fix
  release/v1.0.0
  test/test-feature
  ```
  Use lowercase and dash-separated words.

## 📘 Node version

Minimal required Node.js version is specified in `.nvmrc`.

To ensure correct version:
```bash
nvm install
nvm use
```

## 📄 License [MIT](./LICENSE)
