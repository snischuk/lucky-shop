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

5. **Git flow:**

   - Always pull the latest changes from the `dev` branch first:

     ```bash
     git checkout dev
     git pull origin dev
     ```

   - Create a new feature branch from `dev` with an allowed prefix:

     ```bash
     git checkout -b feature/your-feature-name
     ```

   - Push your branch to GitHub:

     ```bash
     git push origin feature/your-feature-name
     ```

   - Create a Pull Request (PR) targeting the `dev` branch.

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
  fix/fix-description
  refactor/code-change
  chore/task-description
  docs/documentation-update
  release/version-tag
  test/test-description
  ```
  Use lowercase letters, digits, dots, underscores or dashes.

## 📘 Node version

Minimal required Node.js version is specified in `.nvmrc`.

To ensure correct version:

```bash
nvm install
nvm use
```

## 📄 License [MIT](./LICENSE)
