import Module from "../Classes/Module";
import Component_MainWrap from "../Component/mainWrap";

export default class Module_MainWrap extends Module {

    constructor(name) {
        super(name);
    }

    init(){
        this.component = new Component_MainWrap(this.name);
        this.component.init();
    }

}