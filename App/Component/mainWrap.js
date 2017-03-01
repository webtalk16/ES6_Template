import Component from "../Classes/Module";

export default class Component_MainWrap extends Component {

    constructor(name, selector) {
        super(name, selector);

    }
    //renderHtml (component, className){
    //    super.renderHtml(component, className);
    //}
    init() {
        this.selector = "MainWrap";
        this.cssClass = "hidden";
        this.template = {

            html: function(){
                let html = [];
                html.push('<div id="' + this.name + 'Main">');
                html.push('     <div id="' + this.name + 'Container">');
                html.push('         <AppHeader></AppHeader>');
                html.push('         <AppContent></AppContent>');
                html.push('     </div>');
                html.push('</div>');

                return html.join("");
            }
        }
       
        //this.renderHtml(this);
    }

    
}