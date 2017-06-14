const autoLogin = {
  user: {
    adminModeHash: null,
    adminModeUser: null,
    allowedIps: '["12.4.2.2"]',
    alternativePhone: null,
    avatar: null,
    createdAt: '2017-03-29T15:16:56.000Z',
    deleted: 0,
    email: 'al@codemotion.eu',
    firstName: 'Artem',
    forgotPasswordLink: 'XB7wS0mqDPShgL6NCdyFFFbDHJo7hZALKMuioN8tZaScrN7J',
    forgotPasswordTime: '1492640528',
    id: 4,
    idIso: 1,
    idMerchant: 9,
    idRole: null,
    idTimezone: null,
    isNewUser: null,
    lastLogin: '2017-06-12T11:06:44.000Z',
    lastName: 'Livanov',
    lastPasswordChange: '2017-05-24T15:45:54.000Z',
    loginNumber: null,
    phone: null,
    startPage: 'dashboardQuickSale',
    status: 1,
    tableName: 'users',
    theme: null,
    token: 'tokenForE2ETests',
    updatedAt: '2017-06-12T11:06:44.000Z',
    username: 'hillotestm',
  },
  userSettings: {
    availablePages: {
      processTransaction: true,
      customers: true,
      fraudCenter: true,
      batchesHistory: true,
      reports: true,
      controlPanel: true,
      dashboardQuickSale: true,
      invoices: true,
      tickets: true,
      recurringBilling: true,
    },
    upsell: { active: true, text: 'rewqrew' },
    permissions: {
      masterAccount: true,
      processTransaction: { fullAccess: false, viewOnly: false },
      dashboardQuickSale: { fullAccess: true, viewOnly: false },
      batchesHistory: {
        fullAccess: false,
        viewOnly: false,
        closeBatch: false,
        void: true,
        deleteTransactionFromBatch: false,
        capture: false,
        refund: false,
        customizePage: true,
        export: false,
      },
      invoices: { fullAccess: false, viewOnly: false, limitedAccess: false },
      recurringBilling: { fullAccess: true, viewOnly: false },
      controlPanel: { fullAccess: false, viewOnly: false },
      customers: { fullAccess: false, viewOnly: false, limitedAccess: false },
      tickets: { fullAccess: false },
      fraudCenter: { fullAccess: false, viewOnly: false },
      reports: { fullAccess: false, viewOnly: false },
    },
  },
  timeout: 60 * 24 * 7,
};

export {
  autoLogin,
};