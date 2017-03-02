//class Global {
//    constructor() {
//        this.Appname = "App name not yet identified";
//    }

//}

//export default new Global();

let Members = {
    Appname :"App name not yet identified"
}

//function HTMLParser(htmlString) {
//    let html = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null),
//        body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
//    html.documentElement.appendChild(body);

//    body.innerHTML(htmlString);

//    return body;
//}

//export default Global;
module.exports = {
    Global: {
        Members: Members//,
        //HTMLParser: HTMLParser
    }
}
