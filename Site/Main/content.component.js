import Component from "../Prototype/Component";
import View from "../Prototype/View";

import { Global } from "../Common/Global";

function initView(view) {
    view.tagName = "AppContent";
    view.cssClass = "hidden";
    view.template = {

        html: () => {
            let html = [];

            html.push(`<div id="${view.name}Main">`);
            html.push(`     <div id="${view.name}Container">Content view</div>`);
            html.push(`</div>`);

            return html.join("");
        }
    }

    view.renderHtml(view);
}

export default class Component_Content extends Component {

    constructor(name) {
        super(name);
    }

    init() {
        this.View = new View(this.name);
        initView(this.View);

        Global.Members.Appname = "Good New Name";
        console.log("Global.Appname = " + Global.Members.Appname);
    }

}