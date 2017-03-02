import Application from "../Prototype/Application";

import Component_MainWrap from "../Main/mainWrap.component";
import Component_Header from "../Main/header.component";
import Component_Content from "../Main/content.component";

export default class Home extends Application { 
    constructor (name) { 
        super(name);
    }

    init (){
        this.getApp();
        this.initComponents()
    }

    initComponents (){
        let MainWrap = new Component_MainWrap("MainWrap");
        let Header = new Component_Header("Header");
        let Content = new Component_Content("Content");

        MainWrap.init();
        Header.init();
        Content.init();

    }

}