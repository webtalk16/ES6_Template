import Component from "../Prototype/Component";

import View_Header from "./header.view";

import { Global } from "../Common/Global";

export default class Component_Header extends Component {
    constructor(name) {
        super(name);

    }

    init() {
        this.View = new View_Header(this.name);
        this.View.init();

        console.log("Global.Members.Appname = " + Global.Members.Appname);

    }

}