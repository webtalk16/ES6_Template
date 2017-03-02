import Component from "../Prototype/Component";
import View from "../Prototype/View";

function initView(view) {
    view.tagName = "MainWrap";
    view.cssClass = "hidden";
    view.template = {

        html: () => {
            let html = [];
            html.push(`<div id="${view.name}Main">`);
            html.push(`     <div id="${view.name}Container">`);
            html.push(`         <AppHeader></AppHeader>`);
            html.push(`         <AppContent></AppContent>`);
            html.push(`     </div>`);
            html.push(`</div>`);

            return html.join("");
        }
    }

    view.renderHtml(view);
}
export default class Component_MainWrap extends Component {

    constructor(name) {
        super(name);
    }

    init(){
        this.View = new View(this.name);
        initView(this.View);
    }

}