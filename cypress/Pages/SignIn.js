class SigninPage{

    weblocators = {
        userName:"input[placeholder='Type your username']",
        password:"input[placeholder='Type your password']",
        login:'#btn_login'
    }

    openUrl(){
        cy.visit(Cypress.env('URL'))
    }
    userName(username){
        cy.get(this.weblocators.userName).should('be.visible').type(username)
    }
    userPassword(password){
        cy.get(this.weblocators.password).should('be.visible').type(password)
    }
    logIn(){
        cy.get(this.weblocators.login).click()
    }
}
export default SigninPage