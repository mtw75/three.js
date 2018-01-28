// HTML document and Element wrappers/stubs

import { Image } from './QmlImageElement.js';

function _document() {

    this.createElement = function(type) {
        if (type === "img") {
            return new Image();
        } else if (type === 'div') {
            return new HtmlDiv();
        }

        return new HtmlElement();
    }

    this.createElementNS = function(ns, type) {
        if (type === "img") {
            return new Image();
        } else if (type === 'div') {
            return new HtmlDiv();
        }

        return new HtmlElement();
    }

    this.createTextNode = function(value) {
        return new HtmlElement();
    }
};
export { _document };

function HtmlStyle() {
    this.position = undefined;
    this.right = undefined;
    this.top = undefined;
    this.fontSize = undefined;
    this.textAlign = undefined;
    this.background = undefined;
    this.color = undefined;
    this.width = undefined;
    this.width = undefined;
    this.padding = undefined;
    this.zIndex = undefined;
}
export { HtmlStyle };

function HtmlElement() {
    this.prototype = {
        constructor: HtmlElement,

        appendChild: function(child) {
        }
    }
    this.style = new HtmlStyle();
}
export { HtmlElement };

function HtmlDiv() {
    this.innerHTML = "";
    this.style = new HtmlStyle();
}
export { HtmlDiv };
