export default class View {
    constructor(name) {
        this.name = name;
        this.Container = document.getElementById("root");
        this.tagName = "";
        this.cssClass = null;
    }

    renderHtml(ViewInstance) {
        if (ViewInstance.tagName !== "") {
            let tags = document.getElementsByTagName(ViewInstance.tagName);
            if (tags.length) {
                let newElement = document.createElement("section");
                newElement.innerHTML = ViewInstance.template.html(); //todo - or ViewInstance.template.url
                newElement.setAttribute("id", ViewInstance.name);
                if (null != ViewInstance.cssClass)
                    newElement.setAttribute("class", ViewInstance.cssClass);

                tags[0].parentNode.replaceChild(newElement, tags[0]);
            }
            else {
                console.log(`View instance ${ViewInstance.name} is unused, html tagName was not found in DOM`);
            }

            if (tags.length > 1) {
                console.log(`Use only one html tag placeholder per view instance. View instance ${ViewInstance.name} has found more than one tagNames. Only the first tag found in DOM was used. This could cause errors and/or confustion.`);
            }
        }
        else {
            console.log(`View instance ${ViewInstance.name} is unused, no tagName specified`);
        }

    }

}
