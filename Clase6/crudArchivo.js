const fs = require('fs');

class CRUD {
    constructor(fileName) {
        this.fileName = fileName;
        this.objects = this.readData(this.fileName) || [];
    }

    async getAll() {
        try {
            const data = await this.readData(this.fileName);
            return data;
        } catch (err) {
            return []
        }
    }

    async getById(id) {
        try {
            this.objects = await this.getAll();
            const obj = this.objects.find(el => el.id == id || el.id === Number(id));
            return obj ? obj : null;
        } catch (err) {
            console.log(err);
        }
    }

    async getRandom() {
        try {
            const elements = await this.getAll();
            const foundElement = elements[Math.floor(Math.random() * elements.length)]
            return foundElement;
        }

        catch (error) { console.log(error); }
    }

    readData(path) {
        const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
        return data;
    }
}

module.exports = CRUD;