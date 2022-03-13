const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should return an object containing when called with the 'new' keyword", () => {
        const obj = new Engineer('name','2','a@a.com','githubusername');
  
        expect(obj.getName()).toEqual('name');
        expect(obj.getGithub()).toEqual('https://github.com/githubusername');
      });
    });
});