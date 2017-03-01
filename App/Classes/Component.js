export default class Component {
    constructor(name) {
        this.name = name;
        this.Container = document.getElementById("root");
        this.selector = "";
    }

    renderHtml(componentInstance) {

        if (componentInstance.selector !== "") {
            let tags = document.getElementsByTagName(componentInstance.selector);
            for (let i = 0; i < tags.length; i++) {
                tags[i].innerHTML = componentInstance.template.html;
                if (null != componentInstance.cssClass)
                    element.setAttribute("class", componentInstance.cssClass);
            }
        }
        else {
            let elementID = componentInstance.name;
            let domElement = document.getElementById(elementID);
            if (domElement) {
                if (null != componentInstance.cssClass)
                    domElement.className = componentInstance.cssClass;
            }
            else {
                var element = document.createElement("section");
                element.setAttribute("id", elementID);
                if (null != componentInstance.cssClass)
                    element.setAttribute("class", componentInstance.cssClass);

                this.Container.appendChild(element);
                domElement = document.getElementById(elementID);
            }

            domElement.innerHTML = componentInstance.template.html;
        }

    }
}
