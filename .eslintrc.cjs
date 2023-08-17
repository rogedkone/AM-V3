module.exports = {
    env: {browser: true, es2020: true},
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "@feature-sliced"
    ],
    parser: "@typescript-eslint/parser",
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    parserOptions: {ecmaVersion: "latest", sourceType: "module"},
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "import/no-internal-modules": ["error", {
            allow: ["@shared/assets/**", "react-dom/client"]
        }]
    }
};
