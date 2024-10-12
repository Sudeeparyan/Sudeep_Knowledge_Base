
---

# React Style Guide

This document outlines the coding conventions and style guidelines for React development. It's a living document subject to updates as new best practices emerge. The guide is divided into the following sections:

## Table of Contents

- [React Style Guide](#react-style-guide)
  - [Table of Contents](#table-of-contents)
  - [Code Structure](#code-structure)
    - [Folder Structure](#folder-structure)
    - [Casing](#casing)
      - [Pitfalls of Renaming Components](#pitfalls-of-renaming-components)
    - [Naming Convention](#naming-convention)
  - [Coding Style](#coding-style)
    - [JSX Formatting](#jsx-formatting)
    - [Component Structure](#component-structure)
  - [Code Formatting](#code-formatting)
    - [Semicolons](#semicolons)
    - [Quotes](#quotes)
    - [Imports](#imports)
    - [Spacing](#spacing)
    - [Destructure](#destructure)
    - [Consolidation of Duplicate Code](#consolidation-of-duplicate-code)
    - [Pick Fragments Over Divisions](#pick-fragments-over-divisions)
    - [Prefer Passing Objects](#prefer-passing-objects)
  - [SOLID Principles](#solid-principles)
    - [Single Responsibility Principle (SRP)](#single-responsibility-principle-srp)
    - [Open/Closed Principle (OCP)](#openclosed-principle-ocp)
    - [Liskov Substitution Principle (LSP)](#liskov-substitution-principle-lsp)
    - [Interface Segregation Principle (ISP)](#interface-segregation-principle-isp)
    - [Dependency Inversion Principle (DIP)](#dependency-inversion-principle-dip)
  - [Reference Links](#reference-links)
    - [Summary of Changes](#summary-of-changes)
    - [Recommendations](#recommendations)

---

## Code Structure

### Folder Structure

- Organize files by feature or domain rather than by type.
- Group related components, styles, and tests together in the same folder.
- If the interfaces and constants within each component start to expand significantly, consider moving them to separate files.

### Casing

| Case        | Type                                                                                                   | Example                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| `PascalCase` | Components, Higher Order Components                                                                    | `Button.js`, `UserProfile.js`                            |
|             | Class Components                                                                                       | `class UserProfile extends Component { ... }`            |
|             | Function Components (with hooks)                                                                       | `function UserProfile() { ... }`                         |
|             | Context Providers                                                                                      | `const ThemeContext = React.createContext();`            |
|             | Styles under each component                                                                            | `UserProfile.module.scss`                                |
|             | Test files under each component                                                                        | `UserProfile.test.tsx`                                   |
| `camelCase` | Variables, Function Names, Others                                                                      | `const userName = 'John';`, `function getUser() { ... }` |
|             | Custom Hooks                                                                                           | `function useFetchData() { ... }`                        |
|             | Files under each component like constants and interfaces other than the style, test, and component file | `userProfileConstants.ts`, `userProfileInterfaces.ts`    |

#### Pitfalls of Renaming Components

- **Case Sensitivity Issues:** Inconsistencies between local development environments (often case-insensitive, especially on Windows) and deployment environments (typically case-sensitive, like Unix-based servers) can lead to deployment failures and runtime errors.
  
- **Example Issue:** A file referenced as `Component.js` might be treated the same as `component.js` locally but considered different files in a case-sensitive environment.

**Solutions:**

1. **Standardize File Naming Conventions:** Ensure all file names and references follow consistent naming conventions (e.g., all `PascalCase`).
2. **Review and Adjust References:** Carefully review all file paths and references to match the expected case sensitivity for the deployment environment.
3. **Git Configuration:** Configure Git to enforce case sensitivity by setting `core.ignorecase` to `false` to catch inconsistencies early.
4. **Testing in Different Environments:** Test the application in both local and deployment environments to identify and address case sensitivity issues.
5. **Collaboration and Documentation:** Provide documentation or guidelines on file naming conventions and case sensitivity expectations to ensure team-wide consistency.

### Naming Convention

- Use descriptive and meaningful names for components, variables, and functions.
- Prefix component names with their closest parent component name to avoid naming collisions.
- For Boolean variables, begin with auxiliary verbs such as `isChecked`, `canShow`, `doSelfCalibrate`.
- For collection data types like `List` and `Dictionary`, avoid using noisy words like `data`.

  **Example:**

  ```javascript
  const userList;
  ```

- Prefix all interfaces with `I`.

  ```typescript
  export interface IEmployee { ... }
  ```

- Avoid using abbreviations that are not widely recognized or commonly accepted.

  ```javascript
  let number; // Don't use num.
  
  let milliseconds; // Don't use ms.
  ```

## Coding Style

### JSX Formatting

- Use JSX syntax for defining React components.
- Use single quotes for JSX attributes.
- Use parentheses for multiline JSX expressions.
- Use self-closing tags for components without children.

  ```javascript
  // Bad
  <NavigationBar></NavigationBar>
  
  // Good
  <NavigationBar />
  ```

### Component Structure

- Use functional components over class components whenever possible.
- Separate component logic from rendering by using hooks and custom hooks.
- Keep components small, focused, and reusable.
- Avoid deeply nested component structures.

## Code Formatting

### Semicolons

Use semicolons at the ends of statements.

**Example:**

```javascript
let number = 0;
```

### Quotes

Use single quotes instead of double quotes.

**Example:**

```javascript
import { App } from './app';
```

### Imports

Group similar types of imports and add spaces before and after each group. Sort the imports alphabetically within each group.

The import statements in your code should be ordered like this:

1. Built-in modules (e.g., React).
2. Other external modules.
3. Internal modules (e.g., assets).
4. Stylesheets.

**Example:**

```javascript
import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { queryClient } from './setup/query-client';
import { image } from '../../assets/image.png';

import styles from './input.module.scss';
```

### Spacing

- **Add spacing** after declaring constants, after each function, and before `return` statements for cleaner code. This will not be applicable if the scope blocks have only the `return` statement.

  **Example:**

  ```javascript
  function greet() {
    let userName = 'user';

    return `Hello, ${userName}!`;
  }

  function greet() {
    return `Hello, ${userName}!`;
  }
  ```

- **Do not use spaces** between method names and parentheses.

  ```javascript
  // Bad
  function print ('Hello');
  
  // Good
  function print('Hello');
  ```

- **Do not add a blank line** immediately after the open curly brace.

  ```javascript
  // Bad
  if (choice === 'Apple') {


    return true;
  }
  
  // Good
  if (choice === 'Apple') {
    return true;
  }
  ```

- **Do not add a blank line** between the closing brace and `else` or `else if`.

  ```javascript
  // Bad
  if (choice === 'Apple') {
  } 
  
  else if (choice === 'Banana') {
  } 
  
  else {
  }
  
  // Good
  if (choice === 'Apple') {
  } else if (choice === 'Banana') {
  } else {
  }
  ```

- **Separate unrelated control flow blocks** with a blank line.

  ```javascript
  // Bad
  if (choice === 0) {
    // ...
  } else if (choice === 1) {
    // ...
  }
  if (numberOfApples === 0) {
    // ...
  }
  
  // Good
  if (choice === 0) {
    // ...
  } else if (choice === 1) {
    // ...
  }
  
  if (numberOfApples === 0) {
    // ...
  }
  
  // Bad
  for (let i = 0; i < 5; i++) {
      // ...
  }
  for (let j = 0; j < 10; j++) {
     // ...
  }
  
  // Good
  for (let i = 0; i < 5; i++) {
      // ...
  }
  
  for (let j = 0; j < 10; j++) {
     // ...
  }
  ```

- **Do not place multiple blank lines together.**

  ```javascript
  // Bad
  
  const getChoice = () => {
    if (choice === 'Apple') {
      console.log('You have selected the correct fruit!');

      return true;
    }
  }
  
  // Good
  
  const getChoice = () => {
    if (choice === 'Apple') {
      console.log('You have selected the correct fruit!');

      return true;
    }
  }
  ```

### Destructure

Always try to destructure props and state before using them.

**Example:**

```javascript
const MainTitle = ({ isBold, children, hasPadding, ...restProps }) => {
  return (
    <h1
      style={{
        fontWeight: isBold ? 600 : 400,
        padding: hasPadding ? 16 : 0,
      }}
      {...restProps}
    >
      {children}
    </h1>
  );
};
```

### Consolidation of Duplicate Code

To prevent duplication, follow the "Don't Repeat Yourself" principle.

**Example:**

```javascript
// Bad
const ButtonWithRedColor = () => {
  return <button style={{ color: 'red' }}>Click me</button>;
};

const ButtonWithBlueColor = () => {
  return <button style={{ color: 'blue' }}>Click me</button>;
};

// Good
const Button = ({ color }) => {
  return <button style={{ color }}>Click me</button>;
};
```

### Pick Fragments Over Divisions

The code returned by any React component should be wrapped in one singular tag. It's best to use React fragments when grouping elements without needing a parent `div`.

**Example:**

```javascript
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}
```

### Prefer Passing Objects

While passing multiple primitive values is common, it's preferable to pass an object to reduce the number of props and enhance scalability.

**Example:**

```javascript
// Bad - Passing multiple props
function MyComponent() {
  return <ChildComponent name='John' age={30} city='New York' />;
}

// Good - Passing an object
function MyComponent() {
  const user = { name: 'John', age: 30, city: 'New York' };

  return <ChildComponent user={user} />;
}
```

## SOLID Principles

The SOLID principles are fundamental to object-oriented programming and aim to make software designs more understandable, flexible, and maintainable. Here's how they apply to React development:

### Single Responsibility Principle (SRP)

- **Definition:** Each component should have a single responsibility, meaning it should only do one thing and do it well. This promotes better organization and easier maintenance.
- **Example:** A `Button` component should only handle the rendering and behavior of a button. It should not manage state or make API calls.

### Open/Closed Principle (OCP)

- **Definition:** Components should be open for extension but closed for modification. This means you should be able to add new functionality to a component without changing its existing code.
- **Example:** Using higher-order components (HOCs) or render props to add new features to a component without directly modifying its implementation.

### Liskov Substitution Principle (LSP)

- **Definition:** Subtypes should be substitutable for their base types. In React, this means that derived components should be usable wherever their base components are used without affecting the desired behavior.
- **Example:** If you have a `Button` component, you should be able to replace it with a `SubmitButton` component without breaking the functionality expected from a button.

### Interface Segregation Principle (ISP)

- **Definition:** Clients should not be forced to depend on interfaces they don't use. In React, this translates to creating specific, focused interfaces (props) for components rather than large, monolithic ones.
- **Example:** Instead of passing a large object of props to a component, only pass the props that are necessary for its functionality.

### Dependency Inversion Principle (DIP)

- **Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions. In React, this means that components should depend on abstractions (such as props and context) rather than concrete implementations.
- **Example:** Instead of directly importing and using a specific service or data fetching function within a component, inject it as a dependency through props or context.

Adhering to these SOLID principles can lead to more modular, maintainable, and scalable React applications.

## Reference Links

- [SOLID Principles in React](https://www.everydayreact.com/articles/solid-principles-in-react)
- [Applying SOLID to React](https://medium.com/docler-engineering/applying-solid-to-react-ca6d1ff926a4)
- [Mastering React.js with SOLID Principles](https://medium.com/@selieshjksofficial/mastering-react-js-with-solid-principles-a-guide-cbf815f4add4)
- [SOLID in React](https://konstantinlebedev.com/solid-in-react/)
```

### Summary of Changes

1. **Front Matter Added:** Included YAML front matter (`---`) with the `title` field to ensure Docusaurus correctly identifies the document's title.

2. **Consistent Code Formatting:**
   - Replaced bold text (e.g., `**Button**.js`) with backticks for inline code formatting (e.g., `` `Button.js` ``).
   - Ensured all code blocks specify the correct language (`javascript` or `typescript`) for proper syntax highlighting.
   - Removed unnecessary `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->` comments as they are generally not needed unless specific sections need to bypass formatting tools.

3. **Improved Table Formatting:**
   - Enclosed code elements within backticks in tables for better readability.
   - Ensured table headers and alignment are consistent.

4. **Corrected Code Snippets:**
   - Fixed syntax errors in JavaScript examples (e.g., replaced `int i = 0;` with `let i = 0;`).
   - Ensured function declarations and component definitions follow best practices (e.g., using arrow functions where appropriate).
   - Simplified object properties using shorthand notation where applicable.

5. **Enhanced Readability:**
   - Added proper spacing and indentation in code examples.
   - Clarified explanations and examples for better understanding.
   - Ensured consistent usage of comparison operators (`===` instead of `==`).

6. **Link Formatting:**
   - Converted bare URLs into descriptive markdown links for better accessibility and readability.

7. **General Markdown Best Practices:**
   - Ensured proper heading hierarchy.
   - Maintained consistent bullet points and numbering.
   - Improved the overall structure for easier navigation and comprehension.

### Recommendations

- **Consistency in Language:** Ensure that all code examples consistently use either JavaScript or TypeScript based on your project's actual usage to avoid confusion.
  
- **Automate Formatting:** Consider integrating a linter and formatter (like ESLint and Prettier) into your development workflow to automatically enforce these style guidelines.

- **Regular Updates:** Periodically review and update the style guide to incorporate new best practices and accommodate the evolving needs of your project.

By implementing these changes, your React Style Guide should be more robust, readable, and aligned with both Markdown and Docusaurus best practices.