export const signUpPageDataMock = {
    validSignUpInfo: {
        firstName: 'Fist Name',
        lastName: 'LastName',
        emailInput: 'testmail@mail.com',
        monthInput: '12',
        dayInput: '31',
        yearInput: '2000',
        postCodeInput: '12345',
    },
    signUpInfoWitoutEmail: {
        firstName: 'Fist Name',
        lastName: 'LastName',
        monthInput: '12',
        dayInput: '31',
        yearInput: '2000',
        postCodeInput: '12345',
    },
    signUpInfoWithInvalidBirthdayFormat: {
        firstName: 'Fist Name',
        lastName: 'LastName',
        emailInput: 'testmail@mail.com',
        monthInput: '13',
        dayInput: '34',
        yearInput: '2020',
        postCodeInput: '12345',
    },
};