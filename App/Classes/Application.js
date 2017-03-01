export default class Application {
    constructor(name) {
        this.name = name;
    }

    getApp (){
        console.log(`APP name is ${this.name}`);
    }
}