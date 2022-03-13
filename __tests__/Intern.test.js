const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should return an object containing when called with the 'new' keyword", () => {
        const obj = new Intern('name','2','a@a.com','scheool');
  
        expect(obj.getName()).toEqual('name');
        expect(obj.getSchool()).toEqual('scheool');
      });
    });
});