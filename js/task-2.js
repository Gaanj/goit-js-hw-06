class Storage {
    constructor(items) {
        this._items = items;
    }

    getItems() {
        return this._items;
    }

    addItem(newItem) {
        this._items.push(newItem);
    }

    removeItem(itemToRemove) {
        const indexToRemove = this._items.indexOf(itemToRemove);
        if (indexToRemove !== -1) {
            this._items.splice(indexToRemove, 1);
        }
    }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]