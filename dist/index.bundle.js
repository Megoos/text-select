var TextSelect=function(e){"use strict";return e.selectElementText=function(e){var t=document.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)},e.selectText=function(e,t){this.selectElementText(e);var n=document.getSelection(),c=document.createRange(),o=n.anchorNode.firstChild||n.anchorNode;c.selectNode(o),n.removeAllRanges();var a=o.textContent.indexOf(t),l=a+t.length;c.setStart(o,a),c.setEnd(o,l),n.removeAllRanges(),n.addRange(c)},e}({});
