import Application from "../Classes/Application";

import Module_Content from "../Module/content";
import Module_Header from "../Module/header";

export default class Home extends Application { 
    constructor (name) {
        super(name);
    }

    init (){
        this.getApp();
        this.initModules()
    }

    initModules (){
        let moduleContent = new Module_Content("Content");
        let moduleHeader = new Module_Header("Header");

        moduleContent.init();
        moduleHeader.init();

    }

}