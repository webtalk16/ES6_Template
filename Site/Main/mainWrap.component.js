import Component from "../Prototype/Component";
import View_MainWrap from "./mainWrap.view";

export default class Component_MainWrap extends Component {

    constructor(name) {
        super(name);
    }

    init(){
        this.View = new View_MainWrap(this.name);
        this.View.init();
        this.View.renderHtml(this.View);
    }

}