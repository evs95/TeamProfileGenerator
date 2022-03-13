const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should return an object containing when called with the 'new' keyword", () => {
        const obj = new Manager('name','2','a@a.com','3214568794');
  
        expect(obj.getName()).toEqual('name');
        expect(obj.getRole()).toEqual('Manager');
      });
    });
});