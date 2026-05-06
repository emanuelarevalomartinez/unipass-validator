

# UniPass Validator

**TypeScript library for advanced password strength validation (browser + Node.js).**

UniPass Validator is a lightweight dual-bundle library designed to evaluate password strength, provide security suggestions, detect common insecure passwords, and deliver detailed crack-time analysis — all powered by zxcvbn and enhanced blacklist checks.

## 📋 Features

* 🧠 Strength Analysis: Calculates score (0–4) + estimated crack time.

* 🚫 Blacklist Detection: Prevents top insecure & common credentials.

* 📝 Smart Suggestions: Improves password creation in real time

* ⚠️ Security Warnings: Identifies patterns and weak constructions.

* 🔌 Hybrid Package: Browser ESM + Node.js CJS support.

* 🧩 TypeScript Ready: Types built-in for DX excellence.

## 🚀 Installation

```bash
npm install unipass-validator
# or
yarn add unipass-validator
```

## 💡 Basic Usage

#### 1\. 📍 Browser (ESM)

```javascript
import { checkPassword, isInBlacklist } from 'unipass-validator/browser';

const result = checkPassword('123456');
console.log(result);

console.log(isInBlacklist("password")); // true
```

#### 2\. 📚 Node.js (CJS)

```javascript
const { checkPassword, isInBlacklist } = require('unipass-validator/node');

console.log(checkPassword('SuperSecureP4$$!'));
console.log(isInBlacklist("password")); // true
```

## API

#### Main Methods

* **`checkPassword(password: string)`** - Evaluates the password and returns an object containing: strength score, estimated crack time, suggestions, warnings, and whether it is in the blacklist.
* **`isInBlacklist(password: string)`** - Checks if the password is included in the list of common or insecure passwords and returns true or false.

#### ⚙️ Configuration

```typescript
interface PasswordAnalysis {
  password: string;
  score: 0 | 1 | 2 | 3 | 4;
  crackTime: string;
  suggestions: string[];
  warnings: string;
  blacklisted: boolean;
}
```

#### 🧪 Sample Output

```json
{
  "password": "123456",
  "score": 0,
  "crackTime": "less than a second",
  "suggestions": [
    "Add another word or two. Uncommon words are better",
    "Avoid sequences or repeated characters"
  ],
  "warnings": "Very common password",
  "blacklisted": true
}
```

## 📊 Password Strength Scale

| Score | Strength      | Recommended?            |
|-------|---------------|-------------------------|
| 0     | Very Weak     | ❌ No                   |
| 1     | Weak          | ❌ No                   |
| 2     | Average       | ⚠️ Better, not ideal    |
| 3     | Secure        | ✅ Good                 |
| 4     | Very Secure   | 🌟 Excellent            |



## 🌐 Compatibility

* Node.js 14+	✔ Supported
* Browser ESM	✔ Supported
* Typescript	✔ Full typings
* Hybrid package supports both ESM (browser) and CJS (Node)

## ✅ Use Cases

✔ Signup Forms

✔ Password Strength Meters

✔ Security Audits

✔ Enterprise Authentication Rules

✔ UX-First Password Guidance


## ⚙️ Dev & Build Scripts

You can clone this repository and run the following commands to build the project

```bash
# Build dual bundles (browser + node)
npm run build

# Build node bundle
npm run build:node

# Build browser bundle
npm run build:browser
```

## 🚀 Release & Publish Process

Check Workspace: Ensure there are no uncommitted changes or pending commits to push.

```bash
git status
```

Version Bump: Make sure the version in `package.json` is higher than the previous one.

Authentication: Login to your account in the npm registry:

```bash
npm login
```

after use token-based authentication:

```bash
npm config set //registry.npmjs.org/:_authToken=YOUR_TOKEN
```

Build: Generate the production bundles before publishing.

```bash
npm run build
```

Publish: Deploy the package to the registry.

```bash
npm publish --access public
```


## 🤝 Contributing

1. Fork
2. New branch
3. Commit (Conventional Commits preferred)
4. Pull Request

Feedback, features & issues welcome! 🚀

## 📝 License

Apache License 2.0 — free for personal and commercial use.

## 🔗 Repository

[GitHub - UniPass Validator](https://github.com/emanuelarevalomartinez/unipass-validator)
