function e(e){var t=document.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}function t(t,n){e(t);var o=document.getSelection(),a=document.createRange(),d=o.anchorNode.firstChild||o.anchorNode;a.selectNode(d),o.removeAllRanges();var c=d.textContent.indexOf(n),r=c+n.length;a.setStart(d,c),a.setEnd(d,r),o.removeAllRanges(),o.addRange(a)}export{e as selectElementText,t as selectText};
