## Code Review Exercise

### Issue 1: Header Buttons

The header buttons didn't work when clicked, unless it was on the text itself. To fix this, the css was updated and it was ensured the `<a>` tags are block elements and take up the full space of the parent `<li>`.

![Screenshot of header](header.png)

Initial Code:

```css
.nav-list-item {
  display: block;
  padding: 10px;
  width: 170px;
  text-align: center;
  border: 2px solid var(--transparent);
}

.nav-list-item:hover {
  border: 2px solid var(--white);
  border-radius: 20px;
  cursor: pointer;
}

.nav-link {
  text-decoration: none;
  color: var(--white);
}
```

Updated Code:

```css
.nav-list-item {
  padding: 0;
}

.nav-link {
  display: block;
  padding: 10px;
  width: 170px;
  text-align: center;
  text-decoration: none;
  color: var(--white);
  border: 2px solid var(--transparent);
  border-radius: 20px;
}

.nav-link:hover {
  border: 2px solid var(--white);
  cursor: pointer;
}
```

### Issue 2: Form Submission

The form submit/reset buttons don't work. In order to fix this, the div with the buttons was moved inside the form, as prior it was outside, which caused it not to work.

Initial Code:
```css
<form id="RequestInfo" class="content-container form">
        ...
</form>
<div class="form space-evenly-distributed-row-container form-buttons-container">
    <input class="form-button" type="submit" value="Submit" />
    <input class="form-button" type="reset" value="Reset" />
</div>
```

Updated Code:

```css
<form id="RequestInfo" class="content-container form">
        ...
    <div class="form space-evenly-distributed-row-container form-buttons-container">
        <input class="form-button" type="submit" value="Submit" />
        <input class="form-button" type="reset" value="Reset" />
    </div>
</form>
```

### Issue 3: More Info

Can still scroll main page when looking at my info. In order to fix this, a css class was added to cause the page behind the popup to not scroll, and only scroll on the popup page itself. Some changes were made in the css to support this as well.

Initial Code:
```js
const moreInfoButtons = document.querySelectorAll(".more-info-button");

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = "block";
  });
}

const closePopupButtons = document.querySelectorAll(".close-popup-button");

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.closest('.popup-section-container');
    popupSection.style.display = "none";
  });
}
```

```css
.popup-section-container {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--darker-blue-transpaent);
}

.popup-section {
  background-color: var(--white);
  max-width: 846px;
  max-height: 70vh;
  overflow-y: scroll;
  margin: 150px auto;
  padding: 30px;
}
```

Updated Code:
```js
const moreInfoButtons = document.querySelectorAll(".more-info-button");

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = "block";
    document.body.classList.add("no-scroll");
  });
}

const closePopupButtons = document.querySelectorAll(".close-popup-button");

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener("click", (event) => {
    const popupSection = event.currentTarget.closest('.popup-section-container');
    popupSection.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
}
```

```css
.popup-section-container {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--darker-blue-transpaent);
  overflow-y: auto;
}

.popup-section {
  background-color: var(--white);
  max-width: 846px;
  max-height: 70vh;
  overflow-y: auto;
  margin: 150px auto;
  padding: 30px;
}

.no-scroll {
  overflow: hidden;
  height: 100%;
}
```