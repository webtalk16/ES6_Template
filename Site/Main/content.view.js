import View from "../Prototype/View";

export default class View_Content extends View {

    constructor(name) {
        super(name);
    }

    init() {
        this.tagName = "AppContent";
        this.cssClass = "hidden";
        this.template = {

            html: () => {
                let html = [];

                html.push(`<div id="${this.name}Main">`);
                html.push(`     <div id="${this.name}Container">Hello Content view</div>`);
                html.push(`</div>`);

                return html.join("");
            }
        }

        this.renderHtml(this);
    }
}