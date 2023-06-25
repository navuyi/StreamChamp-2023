import { App } from "..";


let app : App


beforeAll((done) => {
  app = new App()
  app.init().then(() => done())
});

afterAll((done) => {
  app.close().then(() => done())
});

describe("test", () => {
  test("test test", () => {
      expect(1).toBe(1)
  })
})



