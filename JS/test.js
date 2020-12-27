class Client{
    
    constructor({ login, email }) {
        this._login = login;
        this._email = email;
    }

    get login() {
        return this._login;
    }

    set login(newLogin) {
        this._login = newLogin;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        this._email = newEmail;
    }
}

const mango = new Client({ login: 'Mango', email: 'mango@dog.woof'});
console.log(mango);