const fs = require("fs");

class CRUD {
  constructor(fileName) {
    this.fileName = __dirname + "/" + fileName;
    this.objects = this.readData(this.fileName) || [];
  }

  generateId() {
    return new Date().getTime().toString();
  }

  async create(obj) {
    try {
      console.log(obj)
      const readFile = await this.getAll();
      obj.id = this.generateId();
      readFile.push(obj);
      this.writeData(readFile);
      return obj;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  async getAll() {
    try {
      const data = await this.readData(this.fileName);
      return data;
    } catch (err) {
      return [];
    }
  }

  async getById(id) {
    try {
      this.objects = await this.getAll();
      const obj = this.objects.find((e) => e.id == id || e.id === Number(id));
      return obj ? obj : null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async modify(id, objMod) {
    try {
      objMod["id"] = id;
      const elementos = await this.getAll();
      const obj = elementos.find((el) => el.id == id);
      if (!obj) {
        console.log("no existe el id " + id);
        return false
      } else {
        const elementosModificados = elementos.map((item) => {
          if (item.id == id) return objMod;
          return item;
        });
        this.writeData(elementosModificados);
        return objMod;
      }
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  async delete(id) {
    try {
      console.log(id)
      const objects = await this.getAll();
      const filterObjects = objects.filter((e) => e.id != id);
      this.writeData(filterObjects);
      return 
    } catch (err) {
      throw new Error(err);
    }
  }

  readData(path) {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    return data;
  }

  writeData(objects) {
    fs.writeFileSync(this.fileName, JSON.stringify(objects, null, 2));
  }
}

module.exports = CRUD;
