"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var SignUpPO = (function () {
    function SignUpPO() {
    }
    Object.defineProperty(SignUpPO.prototype, "firstNameInput", {
        get: function () { return protractor_1.element(protractor_1.by.css('[placeholder="First name"]')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "lastNameInput", {
        get: function () { return protractor_1.element(protractor_1.by.css('[placeholder="Last name"]')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "emailInput", {
        get: function () { return protractor_1.element(protractor_1.by.css('[placeholder="Email"]')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "monthInput", {
        get: function () { return protractor_1.element(protractor_1.by.id('5_2')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "dayInput", {
        get: function () { return protractor_1.element(protractor_1.by.id('5_3')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "yearInput", {
        get: function () { return protractor_1.element(protractor_1.by.id('5_1')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "genderRadioButton", {
        get: function (gender) { return protractor_1.element(protractor_1.by.cssContainingText('div.list-item', gender)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "postCodeInput", {
        get: function () { return protractor_1.element(protractor_1.by.name('9')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "yesRadioButton", {
        get: function () { return protractor_1.element(protractor_1.by.id('15_1')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "noRadioButton", {
        get: function () { return protractor_1.element(protractor_1.by.id('15.1')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "signUpButton", {
        get: function () { return protractor_1.element(protractor_1.by.name('dsComplete')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "successNotificationText", {
        get: function () { return protractor_1.element(protractor_1.by.css('h1.ee_editable')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpPO.prototype, "validationText", {
        get: function () { return protractor_1.element(protractor_1.by.css('div div.errortext')); },
        enumerable: true,
        configurable: true
    });
    SignUpPO.prototype.fillSignUpInputs = function (signUpInfo) {
        this.firstNameInput().sendKeys(signUpInfo.firstName);
        this.lastNameInput().sendKeys(signUpInfo.lastName);
        this.emailInput().sendKeys(signUpInfo.email);
        this.monthInput().sendKeys(signUpInfo.month);
        this.dayInput().sendKeys(signUpInfo.day);
        this.yearInput().sendKeys(signUpInfo.year);
        this.postCodeInput().sendKeys(signUpInfo.postCode);
    };
    ;
    return SignUpPO;
}());
exports.SignUpPO = SignUpPO;
;
