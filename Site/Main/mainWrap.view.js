import View from "../Prototype/View";

export default class View_MainWrap extends View {

    constructor(name) {
        super(name);

    }
    //renderHtml (view, className){
    //    super.renderHtml(view, className);
    //}
    init() {
        this.tagName = "MainWrap";
        this.cssClass = "hidden";
        this.template = {

            html: () => {
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