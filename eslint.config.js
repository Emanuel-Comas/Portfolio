module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module"
        },
        rules: {
            semi: ["error", "always"],
            "no-unused-vars": "warn",
            "no-console": "off"
        },
    },
];