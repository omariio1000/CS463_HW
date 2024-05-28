## Code Review Exercise

### Issue 1: Header Buttons

The header buttons didn't work when clicked, unless it was on the text itself.

![](header.png)

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

### Issue 2: Form

The form submit/reset buttons don't work.

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
