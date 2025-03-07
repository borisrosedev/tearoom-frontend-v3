import BaseContainer from "../../models/BaseContainer";
import AuthService from "../../services/auth/auth.service";
import ValidatorService from "../../services/validator/validator.service";
import formComponent from "../../ui/components/form/form.component";

export default class LoginContainer extends BaseContainer{
    formData!:any
    loginFormSection:HTMLElement
    submitButton:HTMLButtonElement
    validatorService: ValidatorService
    isEmailValid: boolean = false
    isPasswordValid: boolean = false

    constructor(onNavigate: (h:string) => void){
        super(onNavigate)
        this.validatorService = new ValidatorService()
        console.log(this)
        this.onInit()

    }

    onInit(){
        this.formData = {
            id: "login-form",
            fields: [
                {
                    id: "email",
                    placeholder: "Entrer votre email",
                    type: "email",
                    classNames: "is-primary"
                },
                {
                    id: "password",
                    placeholder: "Entrer votre mot de passe",
                    type: "password",
                    classNames: "is-primary"
                }
            ],
            btns: [
                {
                    id: "submit-button",
                    textContent: "Valider",
                    type: "submit",
                    classNames: "is-primary"
                },
                {
                    id: "reset-button",
                    textContent: "Réintialiser",
                    type: "reset",
                    classNames: "is-dark"
                }
            ]
        }



        this.loginFormSection = document.getElementById('login-form-section')
        this.loginFormSection.innerHTML += formComponent(this.formData)

        this.submitButton = document.getElementById('submit-button') as HTMLButtonElement
        this.submitButton.disabled = true

        this.addHandlers()
    }

    addHandlers(){
        const emailField = document.getElementById('email')
        emailField.addEventListener('input', this.onFieldInput.bind(this))

        const passwordField = document.getElementById('password')
        passwordField.addEventListener('input', this.onFieldInput.bind(this))

        const loginForm = document.getElementById('login-form')
        loginForm.addEventListener('submit', this.onSubmit.bind(this))
    }

    onFieldInput(event:any){

        if(event.target.id == 'email') {
            this.isEmailValid = this.validatorService.email(event.target.value)

        } else {
            this.isPasswordValid = this.validatorService.password(event.target.value)
        }


        if(this.isEmailValid && this.isPasswordValid){
            this.submitButton.disabled = false
        } else {
            this.submitButton.disabled = true 
        }

    }

    onSubmit(event:any){
        event.preventDefault()


        const email = document.getElementById('email') as HTMLInputElement
        const password = document.getElementById('password') as HTMLInputElement

        this.submitButton.disabled = true

        setTimeout(() => {
            new AuthService().login({ email: email.value, password: password.value })

        }, 1000)
       
    }


}