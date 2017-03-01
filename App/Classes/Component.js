export default class Component {
    constructor(name) {
        this.name = name;
        this.Container = document.getElementById("root");
    }

    renderHtml (component, className) {

        var elementID = component.name;
        var domElement = document.getElementById(elementID);
        if (domElement) {
            if (null != className)
                domElement.className = className;
        }
        else {
            var element = document.createElement("section");
            element.setAttribute("id", elementID);
            if (null != className)
                element.setAttribute("class", className);

            this.Container.appendChild(element);
            domElement = document.getElementById(elementID);
        }

        domElement.innerHTML = component.template.html;
    }
}
