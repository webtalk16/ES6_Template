import Component from "../Classes/Module";

export default class Component_Header extends Component {

    constructor(name) {
        super(name);

    }
    //renderHtml (component, className){
    //    super.renderHtml(component, className);
    //}
    init(){
        this.template = {

            html: function(){
                let html = [];
        
                html.push('<div id="Container">');
                html.push('</div>');

                return html.join("");
            }
        }
       
        //this.renderHtml(this, "hidden");
    }

    
}