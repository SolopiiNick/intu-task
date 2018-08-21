import { by, element } from 'protractor';

export class SignUpPO {
    get firstNameInput() { return element(by.css('[placeholder="First name"]')); }
    get lastNameInput() { return element(by.css('[placeholder="Last name"]')); }
    get emailInput() { return element(by.css('[placeholder="Email"]')); }
    get monthInput() { return element(by.id('5_2')); }
    get dayInput() { return element(by.id('5_3')); }
    get yearInput() { return element(by.id('5_1')); }
    get genderRadioButton(gender) { return element(by.cssContainingText('div.list-item', gender)); }
    get postCodeInput() { return element(by.name('9')); }
    get yesRadioButton() { return element(by.id('15_1')); }
    get noRadioButton() { return element(by.id('15.1')); }
    get signUpButton() { return element(by.name('dsComplete')); }
    get successNotificationText() { return element(by.css('h1.ee_editable')); }
    get validationText() { return element(by.css('div div.errortext')); }

    public fillSignUpInputs(signUpInfo) {
        this.firstNameInput().sendKeys(signUpInfo.firstName);
        this.lastNameInput().sendKeys(signUpInfo.lastName);
        this.emailInput().sendKeys(signUpInfo.email);
        this.monthInput().sendKeys(signUpInfo.month);
        this.dayInput().sendKeys(signUpInfo.day);
        this.yearInput().sendKeys(signUpInfo.year);
        this.postCodeInput().sendKeys(signUpInfo.postCode);
    };
};
