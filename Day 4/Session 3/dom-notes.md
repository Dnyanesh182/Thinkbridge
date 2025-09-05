# Session 3 – DOM and Events Overview

**Objective:** Learn how to select HTML elements, listen to events, and update text and classes dynamically using JavaScript.

---

## 1. Selecting Elements

Methods to access elements in the DOM:

- `document.getElementById("id")` → select by ID
- `document.getElementsByClassName("class")` → HTMLCollection (live)
- `document.getElementsByTagName("tag")` → HTMLCollection
- `document.querySelector("selector")` → first matching element
- `document.querySelectorAll("selector")` → NodeList (all matches)

**Example:**

```javascript
const heading = document.getElementById("main-heading");
const buttons = document.getElementsByClassName("btn");
const items = document.querySelectorAll(".list-item");
```
