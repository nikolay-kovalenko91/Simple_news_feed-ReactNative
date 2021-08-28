const NewsList = require("./NewsList")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new NewsList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
