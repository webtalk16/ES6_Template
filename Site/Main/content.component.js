import Component from "../Prototype/Component";
import Global from "../Prototype/Global";

import View_Content from "./content.view";

export default class Component_Content extends Component {

    constructor(name) {
        super(name);
    }

    init(){
        this.View = new View_Content(this.name);
        this.View.init();
        this.View.renderHtml(this.View);

        Global.Appname = "Good New Name";
        console.log("Global.Appname = " + Global.Appname);
    }

}