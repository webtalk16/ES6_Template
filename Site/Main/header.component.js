import Component from "../Prototype/Component";
import Global from "../Prototype/Global";

import View_Header from "./header.view";

export default class Component_Header extends Component {
    constructor(name) {
        super(name);

    }

    init(){
        this.View = new View_Header(this.name);
        this.View.init();
        //this.View.renderHtml(this.View);

        console.log("Global.Appname = " + Global.Appname);

    }

}