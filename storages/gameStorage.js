// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class gameStorage {
    constructor() {
      this.storage = {};
      this.id = 0;
    }
  
    addGame({ gameName, genre }) {
      const id = this.id;
      this.storage[id] = { id, gameName, genre };
      this.id++;
    }
  
    getGames() {
      return Object.values(this.storage);
    }
  
    getGame(id) {
      return this.storage[id];
    }
  
    updateGame(id, { gameName, genre }) {
      this.storage[id] = { id, gameName, genre };
    }
  
    deleteGame(id) {
      delete this.storage[id];
    }
  }
  // Rather than exporting the class, we can export an instance of the class by instantiating it.
  // This ensures only one instance of this class can exist, also known as the "singleton" pattern.
  module.exports = new gameStorage();