import Component from "../Prototype/Component";

import View_Content from "./content.view";

import { Global } from "../Common/Global";

export default class Component_Content extends Component {

    constructor(name) {
        super(name);
    }

    init() {
        this.View = new View_Content(this.name);
        this.View.init();

        Global.Members.Appname = "Good New Name";
        console.log("Global.Appname = " + Global.Members.Appname);
    }

}