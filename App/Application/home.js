import Application from "../Classes/Application";

import Module_MainWrap from "../Module/mainWrap";
import Module_Header from "../Module/header";
import Module_Content from "../Module/content";

export default class Home extends Application { 
    constructor (name) { 
        super(name);
    }

    init (){
        this.getApp();
        this.initModules()
    }

    initModules (){
        let MainWrap = new Module_MainWrap("MainWrap");
        let Header = new Module_Header("Header");
        let Content = new Module_Content("Content");

        MainWrap.init();
        Header.init();
        Content.init();

    }

}