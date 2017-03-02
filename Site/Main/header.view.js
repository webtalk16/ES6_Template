import View from "../Prototype/View";

export default class View_Header extends View {

    constructor(name) {
        super(name);

    }
    //renderHtml (view, className){
    //    super.renderHtml(view, className);
    //}
    init() {
        this.tagName = "AppHeader";
        this.cssClass = "hidden";
        this.template = {

            html: () => {
                let html = [];
        
                html.push('<div id="' + this.name + 'Main">');
                html.push('     <div id="' + this.name + 'Container">hello header view2</div>');
                html.push('</div>');

                return html.join("");
            }
        }
       
        this.renderHtml(this);
    }

    
}