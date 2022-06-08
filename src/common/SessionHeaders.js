const fakes = {
  contactId: process.env.REACT_APP_CONTACT_ID,
  contractGroup: process.env.REACT_APP_CONTRACT_GROUP,
  accountNumber: process.env.REACT_APP_CUSTOMER_NUMBER,
  dataGroup: process.env.REACT_APP_DATA_GROUP,
  firstName: process.env.REACT_APP_FIRST_NAME,
  lastName: process.env.REACT_APP_LAST_NAME,
  useCustomHeaders: process.env.REACT_APP_USE_CUSTOM_HEADERS,
};

export const getHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (fakes.useCustomHeaders) {
    headers.append('CONTACT_ID', fakes.contactId);
    headers.append('CUSTOMER_NUMBER', fakes.accountNumber);
    headers.append('DATA_GROUP', fakes.dataGroup);
    headers.append('psych_minder', JSON.stringify(fakes));
  }
  return headers;
};

export const getAxiosHeaders = () => {
  if (fakes.useCustomHeaders === 'true') {
    return (
      {
        'Content-Type': 'application/json',
        CONTACT_ID: fakes.contactId,
        CUSTOMER_NUMBER: fakes.accountNumber,
        DATA_GROUP: fakes.dataGroup,
        psych_minder: JSON.stringify(fakes),
      });
  }
  return {};
};

export default fakes;
