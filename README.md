### 環境作成

- [Create React App](https://github.com/facebook/create-react-app)

```bash
npx create-react-app material_design --template typescript
```

- [ESlint](https://github.com/eslint/eslint)

```bash
yarn add eslint --dev
yarn run eslint --init
```

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```bash
yarn add -D eslint-plugin-react-hooks
```

edit eslint config

```JavaScript
{
  "env": {
    // ...
    node: true,
  },
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ],
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
}
```

- [ESLint-plugin-React](https://github.com/yannickcr/eslint-plugin-react)

```bash
yarn add -D eslint-plugin-react
```

edit eslint config

```javascript
{
  "extends": [
    // ...
    "eslint:recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
  },
}
```

- [Prettier](https://github.com/prettier/prettier)

```
yarn add --dev --exact prettier
echo {}> .prettierrc.json
```

edit .prettierrc.json

```JSON
{
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true
}
```

edit package.json

```JavaScript
{
  "scripts": {
    // ...
    "prettier": "prettier --check . !build/**/* !public/**/*",
    "prettier:fix": "prettier --write . !build/**/* !public/**/*",
  }
}
```

- [Material-UI](https://github.com/mui-org/material-ui)

```bash
yarn add @material-ui/core @material-ui/icons fontsource-roboto
```

React エントリポイントでインポート

```TypeScript
import 'fontsource-roboto';
```

- [gh-pages](https://github.com/tschaub/gh-pages)

```bash
yarn add -D gh-pages
```

edit package.json

```JSON
{
  "homepage": "https://yamaguchiryuta.github.io/material_design/",
  "scripts": {
    "deploy": "yarn run build & gh-pages -d build"
  }
}
```

### CI/CD

.github/workflows/gh-pages-deploy.yml

```YAML
name: Deploy
on:
  push:
    branches: [master]
  # pull_request:
  #   branches: [master]

  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js environment
        uses: actions/setup-node@v2.1.5
        with:
          node-version: 14.x
          architecture: x64

      - name: Install Dependencies
        run: yarn install

      - name: Build React App
        run: yarn build

      - name: deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

---

---

### Deploy

- MaterialDesign [page](https://yamaguchiryuta.github.io/material_design/)
