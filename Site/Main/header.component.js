import Component from "../Prototype/Component";
import View from "../Prototype/View";

import { Global } from "../Common/Global";

function initView(view) {
    view.tagName = "AppHeader";
    view.cssClass = "hidden";
    view.template = {

        html: () => {
            let html = [];

            html.push(`<div id="${view.name}Main">`);
            html.push(`     <div id="${view.name}Container">header view</div>`);
            html.push(`</div>`);

            return html.join("");
        }
    }
    //let myHTML = Global.HTMLParser(view.template.html);
    //cosole.log("parces html == " + myHTML);
    view.renderHtml(view);
}

export default class Component_Header extends Component {
    constructor(name) {
        super(name);

    }

    init() {
        this.View = new View(this.name);
        initView(this.View);

        console.log("Global.Members.Appname = " + Global.Members.Appname);

    }

    

}