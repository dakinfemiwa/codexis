# Codexis

**Repository intelligence through structural code analysis.**

Codexis is an open-source code analysis tool designed to understand the structure and relationships within software repositories.

Rather than treating a codebase as a collection of text files, Codexis builds towards a structured representation of the code — allowing relationships between files, functions, classes, imports, references, and dependencies to be analysed.

The project uses **Tree-sitter** as its parsing foundation, with higher-level analysis built on top.

> **Status:** Early development. Repository parsing and syntax-tree analysis are currently being implemented.

## Why Codexis?

As software projects grow, understanding how a change affects the rest of a codebase becomes increasingly difficult.

Text search can tell you where something appears. Structural analysis can help explain **how those pieces of code are connected**.

Codexis aims to make those relationships explicit.

For example:

```text
UserService.createUser()
        │
        ├── validates User
        ├── calls UserRepository
        └── writes to Database
```

This could eventually support questions such as:

```text
What does UserService.createUser() depend on?

Where is UserRepository.save() used?

Which parts of the repository depend on this module?

What could be affected by changing this function?
```

## Project Status

Codexis is under active development.

The current focus is building the core parsing pipeline:

```text
Repository
    ↓
Source Files
    ↓
Tree-sitter
    ↓
Syntax Tree
```

Further analysis capabilities will be built on this foundation.
