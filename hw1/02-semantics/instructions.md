## Instructions for Exercise 02 - Semantics

In this exercise, we will practice writing semantically appropriate HTML.

Note: This exercise can be finished without any knowledge of CC, and there is no need to look into the CSS file.

First, we should figure out what is meant by the word semantics.

Semantics is the meaning of the HTML document. For example, the meaning of a p element is a paragraph, the meaning of a button element is an interactive element that can be triggered by the user to perform an action (e.g. display a pop-up section).

Not all HTML elements have semantic meaning. For example, according to the mdn web docs and web.dev, the [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) and [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) elements do not have any semantic meaning. They are used as styling wrappers, so that multiple elements can be grouped together and styled the same way, using the class or id attributes.

Writing semantically appropriate HTML makes web pages accessible. Assistive technologies, such as screen readers, convey the information to its users through semantics. **Inappropriate semantics can deliver wrong or confusing information to users via assistive technologies.**

### 00-example

- This exercise provides an example on how to choose semantically correct elements.
- The **solution** has been provided in **00-example-solution.html file**.

- Exercise: Replace all the <REPLACE_ME> </REPLACE_ME> with the appropriate HTML element.

In this exercise, we will look into the “Welcome to CS4/563 Intro to Web Development” portion of the file. The styling for “Welcome to”, “CS4/563 Intro to”, and “Web Development” is different, but semantically, these three parts put together constitute one paragraph. Thus, it is very important to think about semantics separately from styling. To semantically indicate one paragraph, we would write the following code:

    <p>Welcome to CS4/563 Intro to Web Development</p>

To assign a different style to “CS4/563 Intro to”, we need to wrap it in another tag. We will then apply a style to that tag. This tag should not have any semantic meaning; otherwise we are introducing additional semantics that should not be there. One option is to use the span element, known as an inline styling wrapper, to wrap “CS4/563 Intro to”:

    <span>CS4/563 Intro to</span>

And now the HTML structure becomes:

    <p>Welcome to <span>CS4/563 Intro to</span> Web Development</p>

Same idea applies to “Web Development”:

    <p>Welcome to <span>CS4/563 Intro to</span><span>Web Development<span></p>

Now let us think about what happens when a semantic element is used instead of span. Let's look at [strong](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong) as an example. The strong element semantically means that its wrapped content has strong importance, seriousness, or urgency. Thus, the following HTML code means that we have a paragraph where "CS4/563 Intro to" is significantly more important than "Web Development":

    <p>Welcome to <strong>CS4/563 Intro to</strong><span>Web Development<span></p>

### 01-paragraphs

Exercise: Replace all the <REPLACE_ME> </REPLACE_ME> tags with the appropriate HTML element in the **01-paragraphs.html** file.

Note: you should not modify the “class” attribute. For example, in this line:

    <REPLACE_ME class="general-text"></REPLACE_ME>

Replacing <REPLACE_ME></REPLACE_ME> with <REPLACED_TAG></REPLACED_TAG>, the class should remain the same:

    <REPLACED_TAG class="general-text"></REPLACED_TAG>

We want to both use the appropriate semantic elements and we want to avoid adding unnecessary semantics when additional meaning is not needed.

### 02-page-sections

- Exercise: Replace all the <REPLACE_ME> </REPLACE_ME> tags with the appropriate HTML element in the **02-page-sections.html** file.
- Note: you should not modify the “class” attribute.

### 03-images

- Review 04-accessiblity.pdf on Canvas (see the Week 3 Overview).
- Identify and fix the accessibility issues in the **03-images.html** file.

### 04-form

- Review 04-accessiblity.pdf on Canvas (see the Week 3 Overview).
- Identify and fix the accessibility issues in the **04-form.html** file.

#### Notes:

- There is limited CSS associated with this exercise, as most elements are rendered using the browser’s default styling. Thus, after fixing the semantic issues the rendered result could be different with the one from the starter file. 
- By definition, the [radio buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) require that only one radio button in a given group can be selected at the same time. This should be enforced in this assignments as well as later ones.
- By definition, [checkboxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) allow multiple selections in a checkbox group.
