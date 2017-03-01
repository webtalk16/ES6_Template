﻿import Module from "../Classes/Module";
import Global from "../Classes/Global";

import Component_Header from "../Component/header";

export default class Module_Header extends Module {
    constructor(name) {
        super(name);

    }

    init(){
        this.component = new Component_Header("Header");
        this.component.init();
        //this.component.renderHtml(this.component, "hidden");

        console.log("Global.Appname = " + Global.Appname);

    }

}