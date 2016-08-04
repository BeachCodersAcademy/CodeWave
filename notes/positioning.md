# Positioning

* Static (default):
  * Not positioned in any special way
  * Based on page flow
  * Does NOT use 'top, left, right, and bottom' attributes
* Relative
  * Uses 'top, left, right, and bottom' attributes *based on elements around it*
  * Relative to where it would have been
  * Other content will not be adjusted to fit into any gap left by the element
  * Behaves the same as 'static' unless you add some extra properties
  * **Does not affect other elements on the page**
* Absolute
  * Position absolute *relative to parent element*
  * Gets taken out of 'page flow' (can be in front / behind content)
  * Set parent element to 'position: relative' to set relative that element (by default, parent element is entire page)
  * Usually used to position something **inside** something else
* Fixed
  * Fixed to x/y-coordinates of **viewport** (using 'top, left, right, and bottom' attributes)
  * Stays in the same place even if the page is scrolled
