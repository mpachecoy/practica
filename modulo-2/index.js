const fs = require("fs");

class ManagerVersion {
    constructor(path) {
        this.path = path;
    }

    consultarVersion() {
        try {
            const version = fs.readFileSync(this.path, "utf-8");
            return JSON.parse(version);
        } catch (error) {
            console.log(error);
        }
    }

    nuevaVersion() {
        try {
            const version = fs.readFileSync(this.path, "utf-8");
            const data = JSON.parse(version);

            data.version += 1;
            fs.writeFileSync(this.path, JSON.stringify(data, null, 2));
        } catch (error) {
            console.log(error);
        }
    }
}

const manager = new ManagerVersion("./config/settings.json")

console.log(manager.consultarVersion())
// manager.nuevaVersion()
// console.log(manager.consultarVersion())
