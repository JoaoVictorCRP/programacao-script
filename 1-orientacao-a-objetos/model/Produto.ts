export default class Produto {
    #id : number;
    #nome : string;
    #email : string;

    constructor(id:number, nome:string, email:string) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }
}