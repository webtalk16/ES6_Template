import Component from "../Classes/Module";

export default class Component_Content extends Component {

    constructor(name) {
        super(name);
    }

    init() {
        this.selector = "AppContent";
        this.cssClass = "hidden";
        this.template = {

            html: function () {
                let html = [];

                html.push('<div id="' + this.name + 'Main">');
                html.push('     <div id="' + this.name + 'Container"></div>');
                html.push('</div>');

                return html.join("");
            }
        }

        //this.renderHtml(this);
    }
}