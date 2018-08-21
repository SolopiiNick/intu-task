import { SignUpPO } from '../pages/SignUpPage';
import { signUpPageDataMock } from '../dataMock/specs/signUpDataMock';

const signUpPage = new SignUpPO();

describe('Sign Up Page', () => {
    it('should Sign Up with valid info', () => {
        signUpPage.fillSignUpInputs(signUpPageDataMock.validSignUpInfo);
        signUpPage.genderRadioButton('Female').click();
        signUpPage.yesRadioButton().click();
        signUpPage.signUpButton().click();
        expect(signUpPage.successNotificationText().getText()).toEqual('Thank you for entering.');
        });

    it('should no Sign Up without email', () => {
        signUpPage.fillSignUpInputs(signUpPageDataMock.signUpInfoWitoutEmail);
        signUpPage.genderRadioButton('Male').click();
        signUpPage.noRadioButton().click();
        signUpPage.signUpButton().click();
        expect(signUpPage.validationText().getText()).toEqual('Please enter your email address');
    });

    it('should no Sign Up with invalid Birthday format', () => {
        signUpPage.fillSignUpInputs(signUpPageDataMock.signUpInfoWithInvalidBirthdayFormat);
        signUpPage.genderRadioButton('Prefer not to say').click();
        signUpPage.noRadioButton().click();
        signUpPage.signUpButton().click();
        expect(signUpPage.validationText().getText()).toEqual('Please enter a valid date in DD/MM/YYYY format');
    });
});