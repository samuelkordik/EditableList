EditableList
============

jQuery plugin to create an editable list. Markup is a simple UL element with LI elements. That's all that's needed. The plugin adds the "Add Item" button and sets up all the functionality.

The list has text inputs to edit data; while in a text input, the backspace key will delete the list item, and the enter/return key will add an item.

The "#" handles allow grabbing and sorting of the list (using jQuery UI Sortable widget).

There is a toArray method that exports the list values as an ordered array.

## Usage
This plugin requires jQuery and jQuery UI. Usage is simple: call $().editableList() on a UL element (or set of UL elements) to initialize list.

Call $().editableList("toArray") to get an ordered array out from the element of the values.

Look at the `demo.html` file to see an example of CSS.
