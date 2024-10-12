
---

# Best Practices for Dependency Management

## 1. Purpose

The purpose of this document is to provide a set of best practices for managing dependencies in Python projects. Dependencies are external packages or modules that your project relies on to function properly. Managing dependencies involves installing, updating, and removing them as needed, as well as ensuring that they are compatible with your project and each other.

Managing dependencies is an essential part of developing and maintaining Python projects, as it can affect the quality, performance, security, and reproducibility of your code. However, managing dependencies can also be challenging, as there are many factors to consider, such as the source, version, and location of the dependencies, the environment in which they are installed, and the tools that are used to manage them. 

By following this document, you will be able to manage your dependencies more effectively and efficiently, and ensure that your Python projects are robust, reliable, and easy to share with others.

## 2. Best Practices

Here are some best practices to follow when managing dependencies in Python:

### Use a Virtual Environment

A virtual environment is an isolated environment where you can install packages without affecting the system-wide installation of Python. This allows you to have different versions of packages for different projects, without conflicts. You can use tools like venv or poetry to create and manage virtual environments.

### Pin Your Dependencies

It is important to specify the exact version of the packages that your project depends on. This ensures that your project will continue to work even if a new version of a dependency is released that introduces breaking changes. You can use a `requirements.txt` file to specify the exact versions of the packages that your project depends on.

### Keep Your Requirements File Up-to-Date

Make sure to update your `requirements.txt` file whenever you add, remove, or update a dependency. This ensures that others can easily install the correct versions of the dependencies when they work on your project.

### Avoid Global Installations of Packages

Avoid installing packages globally, as this can lead to conflicts between different projects that depend on different versions of the same package. Instead, always install packages within a virtual environment.

### Don’t Commit Your Virtual Environment Files to Version Control

Your virtual environment files should not be committed to version control, as they can be large and are specific to your local setup. Instead, only commit your `requirements.txt` file, which specifies the dependencies that others need to install.

### Make Sure You Have the Latest Versions of All Your Dependencies

Regularly check for updates to your dependencies and update them as needed. This ensures that you have the latest features and bug fixes. By following these best practices, you can effectively manage dependencies in your Python projects and ensure that your projects are stable and easy to work with.

## 3. Dependency Management Tool

A dependency management tool in Python is a tool that simplifies the process of managing the external libraries and packages that your project depends on. These tools help you keep track of which packages your project uses, as well as their versions, and ensure that the correct versions are installed in the correct environments.

Here are some key features of dependency management tools:

### Package Installation

These tools allow you to easily install new packages into your project's environment. This includes downloading the package from a package repository (like PyPI), installing it, and making it available for import in your Python code.

### Dependency Resolution

When you install a package, it may depend on other packages. Dependency management tools automatically resolve these dependencies and install all necessary packages.

### Version Management

Over time, new versions of packages are released. Dependency management tools help you manage these versions, ensuring that you're using a version that works with your code and updating packages when necessary.

### Environment Isolation

These tools often provide ways to isolate your project's environment from others. This means that the packages installed for one project won't interfere with those installed for another.

### Reproducibility

By keeping track of the exact versions of the packages used in a project, dependency management tools make it easy to reproduce the project's environment on a different machine.

**Note:** Poetry is the recommended dependency management tool for Python. The following section will discuss Poetry and how to use it in your projects.

## 4. How Poetry Helps

Dependency management tools like Poetry are essential for maintaining best practices in Python development for several reasons:

### Virtual Environment

Poetry automatically creates a virtual environment for your project. This isolates your project and its dependencies from the global Python environment, preventing conflicts between different versions of packages used in other projects.

### Dependency Pinning

Poetry uses a `pyproject.toml` file to keep track of your project's dependencies. This file serves a similar purpose to `requirements.txt`, but it's more powerful because it also includes metadata about your project and its dependencies.

In addition to the `pyproject.toml` file, Poetry also generates a `poetry.lock` file. This lock file is crucial for maintaining consistent environments. It pins each dependency (and sub-dependency) to a specific version, ensuring that every install results in the exact same environment. The `poetry.lock` file should be committed to version control, allowing anyone who works on the project to have the same exact dependencies.

### Keeping Dependencies Up-to-Date

Poetry takes care of updating the `pyproject.toml` file whenever a package is installed or removed using `poetry add <package>` and `poetry remove <package>` commands respectively. This avoids the need for manually updating your dependencies regularly.

### Avoiding Global Installations

Since Poetry automatically creates a virtual environment for each project, there's no need to install packages globally. This helps to avoid conflicts between different versions of the same package used in different projects.

### Version Control

Poetry generates a `poetry.lock` file, which you should commit to version control. This file ensures that everyone working on the project uses the same versions of the dependencies. However, the virtual environment itself (which includes the installed packages) should not be committed to version control.

### Latest Versions of Dependencies

Poetry makes it easy to stay up-to-date with the latest versions of your dependencies. You can use the `poetry show --outdated` command to see which packages have newer versions available. You can easily update all your dependencies to their latest versions by running `poetry update`. If you want to update a single package using Poetry, you can use the `poetry update <package>` command.

These commands will also update the `pyproject.toml` and `poetry.lock` files accordingly.

## 5. Using Poetry

### Setup Poetry

- Open PowerShell and run the below command:

```bash
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
```

- Copy the path mentioned in the PowerShell.
- Add the path to the environment variable.
  - Open the **System Properties** dialog. You can do this by right-clicking on **Computer** on the desktop or in the Start menu, choosing _Properties_, then clicking on **Advanced system settings.**
  - In the System Properties dialog, click on the **Environment Variables** button. This will open the Environment Variables dialog.
  - In the Environment Variables dialog, navigate to the **System variables** section and double-click the **Path** variable.
  - Click **New** and add the copied path, then click **OK.**
- Open a new command prompt and type the below command to check if the Poetry command is recognized:

```bash
poetry --version
```

- Once it is working, it is recommended to configure virtual environment creation directory to your project folder. This can be done by executing the below command:

```bash
poetry config virtualenvs.in-project true
```

**Note:** This is a one-time configuration and need not be repeated for every project.

### Creating a New Poetry Project

Creating a new project with Poetry is straightforward. You can use the `new` command followed by the name of your project:

```bash
poetry new my_project --src
```

**Note:** Remember to replace `my_project` with the actual name of your project when you’re setting it up. This command will create a new directory named `my_project` in your current directory. Inside this directory, Poetry will generate a basic project structure:

```plaintext
my_project
 ┣ pyproject.toml
 ┣ README.md
 ┣ src
 ┃ ┗ my_project
 ┃ ┃ ┣ __init__.py
 ┣ tests
 ┃ ┣ __init__.py
```

Here’s what each part of this structure means:
- **pyproject.toml**: This is the main configuration file for your project, where you’ll specify your project’s dependencies.
- **README.md**: This is a markdown file where you can provide documentation for your project.
- **src/**: This directory is an additional layer of nesting for your source code. It’s considered good practice as it avoids certain types of import issues.
- **src/my_project/**: This directory is where your project’s source code goes. The `__init__.py` file is used to indicate that this directory should be treated as a Python package.
- **tests/**: This directory is where you’ll put tests for your project.

### Porting an Existing Project to Poetry

In existing projects, Poetry commands cannot be used for dependency management unless there is a `pyproject.toml` file with required sections (`[tool.poetry]` and `[tool.poetry.dependencies]`). This can be easily generated by running the following command:

```bash


poetry init
```

The above command will prompt you with a series of questions about your project. All the fields are optional, so feel free to skip anything by pressing Enter if you don’t know what to provide.

Run the following command to add new packages to your project:

```bash
poetry add <package-name>
```

**Note:** This will create a new virtual environment automatically in the project's root folder under the name `.venv`. If the existing project also has a `.venv` folder in the root folder, delete it and run the above command.

### Creating `requirements.txt`

Sometimes a `requirements.txt` file might be needed. For example, Microsoft Azure has an automated way of creating virtual environments and installing the packages from a `requirements.txt` file for Python web apps. In such cases, execute the following command to export all the project dependencies to a `requirements.txt` file:

```bash
poetry export -f requirements.txt --output requirements.txt
```

This will create a `requirements.txt` file with all the pinned versions of your dependencies, which you can use for other purposes like during deployment.

## 6. References

1. [Poetry Documentation](https://python-poetry.org/docs/)

```

This single-file code provides a comprehensive guide to Python dependency management using best practices, especially focused on using Poetry for managing dependencies.