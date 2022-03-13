const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object containing when called with the 'new' keyword", () => {
        const obj = new Employee('name','2','a@a.com');
  
        expect(obj.getName()).toEqual('name');
      });
    });
});