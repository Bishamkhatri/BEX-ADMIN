import SigninPage from "../../Pages/SignIn"
import signinData from "../../fixtures/signinData.json"
describe('BEX ADMIN AUTOMATE', ()=>{

    it('Login flow',()=>{
        const signin = new SigninPage()
        signin.openUrl()
        signin.userName(signinData.userName)
        signin.userPassword(signinData.password)
        signin.logIn()

    })
})