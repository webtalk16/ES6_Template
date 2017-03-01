import Module from "../Classes/Module";
import Global from "../Classes/Global";

import Component_Content from "../Component/content";

export default class Module_Content extends Module {

    constructor(name) {
        super(name);
    }

    init(){
        this.component = new Component_Content("Content");
        this.component.init();

        Global.Appname = "Good New Name";
        console.log("Global.Appname = " + Global.Appname);
    }

}