import { cards } from '../cards';
import { getRandomInt } from '../../utils/Helpers';

const { discover, visa, masterCard, amex } = cards;

const MIN_NUM = 0;
const MAX_NUM = 100000000;

const historyDataMock = {
  madeDiscoverCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: discover.name,
      cardNumberInput: discover.number,
      cardCvvInput: discover.cvv,
      cardExpireMonth: discover.expire.month,
      cardExpireYear: discover.expire.year,
      amountInput: '1012',
      taxInput: '0.92',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  madeVisaCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: visa.name,
      cardNumberInput: visa.number,
      cardCvvInput: visa.cvv,
      cardExpireMonth: visa.expire.month,
      cardExpireYear: visa.expire.year,
      amountInput: '74.31',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
    },
  },
  madeMasterCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireMonth: masterCard.expire.month,
      cardExpireYear: masterCard.expire.year,
      amountInput: '74.31',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
    },
  },
  madeAmexCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: amex.name,
      cardNumberInput: amex.number,
      cardCvvInput: amex.cvv,
      cardExpireMonth: amex.expire.month,
      cardExpireYear: amex.expire.year,
      amountInput: '70',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  madeMasterCardWithAuthAction: {
    generalInfo: {
      actionSelect: 'authorize',
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireMonth: masterCard.expire.month,
      cardExpireYear: masterCard.expire.year,
      amountInput: '75',
      taxInput: '1',
      surchargeInput: '0.43',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      companyNameInput: 'Test Company n',
      poNumberInput: '004',
    },
    billingInfo: {
      checkBillingBlock: 'true',
      firstName: 'Nick',
      lastName: 'Test',
      street: 'street',
      street2: '695 Woodsman Ave',
      city: 'Skokie',
      zipCode: '60076',
      // country: 'United States of America',
      state: 'Illinois',
      phone: '(125)23423412',
    },
  },
  approveWithAuthorizeCreateCustomerByVisa: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
      addBillingInfo: {
        checkBillingBlock: 'true',
        firstName: 'Leo',
        lastName: 'Cockin',
        street: '123 6th S',
        street2: '123 8th St.',
        city: 'Melbourne',
        zipCode: '32904',
        // country: 'US',
        state: 'Florida',
        phone: '(152)234234234',
      },
      addShippingInfo: {
        checkShippingBlock: 'true',
        firstName: 'Teo',
        lastName: 'Li',
        street: '124 6th St.',
        street2: '124 8th St.',
        city: 'Chevy Chase',
        zipCode: '20815',
        // country: 'Ukraine',
        phone: '(380)990089998',
      },
      addPaymentMethodCard: {
        cardNameInput: visa.name,
        cardNumberInput: visa.number,
        cardExpireMonth: visa.expire.month,
        cardExpireYear: visa.expire.year,
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        customerSelectInput: 'New Company 1',
        actionSelect: 'authorize',
        cardNameInput: visa.name,
        cardNumberInput: visa.number,
        cardCvvInput: visa.cvv,
        cardExpireMonth: visa.expire.month,
        cardExpireYear: visa.expire.year,
        amountInput: '80',
        taxInput: '1',
        surchargeInput: '2',
        avsStreetInput: '938 Whitemarsh Lane',
        avsZipInput: '11803',
      },
    },
  },

  approveWithPostAuthorizeCreateCustomerByAmex: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        customerSelectInput: 'New Company 2',
        actionSelect: 'postauthorize',
        cardNameInput: amex.name,
        cardNumberInput: amex.number,
        cardCvvInput: amex.cvv,
        authNumberInput: '212121',
        cardExpireMonth: amex.expire.month,
        cardExpireYear: amex.expire.year,
        amountInput: '77',
        taxInput: '0.19',
        editCustomerCheckbox: true,
      },
      shippingInfo: {
        firstName: 'Olga',
        lastName: 'Riy',
        street: '591 Brickell Dr.',
        street2: '595 Brickell Dr.',
        city: 'Jamaica Plain',
        zipCode: '',
        state: 'Maryland',
        phone: '(125)212121345',
      },
    },
  },
  approveWithRefundCreateCustomerByDiscover: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
      addBillingInfo: {
        checkBillingBlock: 'true',
        firstName: 'Nick',
        lastName: 'Test',
        street: '694 Woodsman Ave.',
        street2: '695 Woodsman Ave.',
        city: 'Skokie',
        zipCode: '60076',
        // country: 'US',
        state: 'Illinois',
        phone: '(125)23423412',
      },
      addPaymentMethodCard: {
        cardNameInput: discover.name,
        cardNumberInput: discover.number,
        cardExpireMonth: discover.expire.month,
        cardExpireYear: discover.expire.year,
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        customerSelectInput: 'New Company 3',
        actionSelect: 'refund',
        cardNumberInput: discover.number,
        cardExpireMonth: discover.expire.month,
        cardExpireYear: discover.expire.year,
        amountInput: '80',
        taxInput: '12',
        surchargeInput: '10',
        descriptionInput: 'test description',
        poNumberInput: '21',
        invoiceNumber: '14',
      },
    },
  },
};

export {
  historyDataMock,
};
