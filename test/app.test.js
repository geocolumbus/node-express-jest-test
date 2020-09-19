const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)

test("it should say hello", async done => {

    const res = await request.get("/")
    expect(res.body).toEqual({})
    done()
})
