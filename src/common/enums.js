export const roles = Object.freeze({
  Batch_Validator: 'BATCH VALIDATOR',
  State_Validator: 'STATE VALIDATOR',
  Data_Supplier: 'DATA SUPPLIER',
  Data_Viewer: 'DATA VIEWER',
  Internal_Data_Viewer: 'INTERNAL DATA VIEWER',
  External_Data_Viewer: 'EXTERNAL DATA VIEWER',
  Hard_Copy_Data_Supplier: 'HARD COPY DATA SUPPLIER',
  Administrator: 'ADMINISTRATOR',
});

export const issueIdentifierList = [];
issueIdentifierList['0'] = { issueIdentifierCode: '0', issueIdentifierName: '' };
issueIdentifierList['1'] = { issueIdentifierCode: '1', issueIdentifierName: 'Data Review Inquiry' };
issueIdentifierList['2'] = { issueIdentifierCode: '2', issueIdentifierName: 'State Interrogatory - Premiums' };
issueIdentifierList['3'] = { issueIdentifierCode: '3', issueIdentifierName: 'State Interrogatory - Losses' };
issueIdentifierList['4'] = { issueIdentifierCode: '4', issueIdentifierName: 'State Interrogatory - Claim Count' };
issueIdentifierList['5'] = { issueIdentifierCode: '5', issueIdentifierName: 'State Interrogatory - Expenses' };
issueIdentifierList['6'] = { issueIdentifierCode: '6', issueIdentifierName: 'State Interrogatory - Call 31 Claim' };
issueIdentifierList['7'] = { issueIdentifierCode: '7', issueIdentifierName: 'Call 19 Analysis' };
issueIdentifierList['8'] = { issueIdentifierCode: '8', issueIdentifierName: 'Call 31 Analysis' };
issueIdentifierList['9'] = { issueIdentifierCode: '9', issueIdentifierName: 'Compliance Form Analysis' };
issueIdentifierList['10'] = { issueIdentifierCode: '10', issueIdentifierName: 'DSR Review' };
issueIdentifierList['11'] = { issueIdentifierCode: '11', issueIdentifierName: 'Edit Follow-up' };
issueIdentifierList['12'] = { issueIdentifierCode: '12', issueIdentifierName: 'Escalation' };
issueIdentifierList['13'] = { issueIdentifierCode: '13', issueIdentifierName: 'Expected Call(s) Review' };
issueIdentifierList['14'] = { issueIdentifierCode: '14', issueIdentifierName: 'FinStat' };
issueIdentifierList['15'] = { issueIdentifierCode: '15', issueIdentifierName: 'General Inquiry' };
issueIdentifierList['16'] = { issueIdentifierCode: '16', issueIdentifierName: 'Large Loss Analysis' };
issueIdentifierList['17'] = { issueIdentifierCode: '17', issueIdentifierName: 'NAIC Review' };
issueIdentifierList['18'] = { issueIdentifierCode: '18', issueIdentifierName: 'Small Call Analysis' };
issueIdentifierList['19'] = { issueIdentifierCode: '19', issueIdentifierName: 'State Regulatory Inquiry' };

export const stateList = [];
stateList['1'] = { stateCode: '01', state: 'AL', stateName: 'Alabama' };
stateList['2'] = { stateCode: '02', state: 'AZ', stateName: 'Arizona' };
stateList['3'] = { stateCode: '03', state: 'AR', stateName: 'Arkansas' };
stateList['5'] = { stateCode: '05', state: 'CO', stateName: 'Colorado' };
stateList['6'] = { stateCode: '06', state: 'CT', stateName: 'Connecticut' };
stateList['8'] = { stateCode: '08', state: 'DC', stateName: 'District of Columbia' };
stateList['9'] = { stateCode: '09', state: 'FL', stateName: 'Florida' };
stateList['10'] = { stateCode: '10', state: 'GA', stateName: 'Georgia' };
stateList['11'] = { stateCode: '11', state: 'ID', stateName: 'Idaho' };
stateList['12'] = { stateCode: '12', state: 'IL', stateName: 'Illinois' };
stateList['13'] = { stateCode: '13', state: 'IN', stateName: 'Indiana' };
stateList['14'] = { stateCode: '14', state: 'IA', stateName: 'Iowa' };
stateList['15'] = { stateCode: '15', state: 'KS', stateName: 'Kansas' };
stateList['16'] = { stateCode: '16', state: 'KY', stateName: 'Kentucky' };
stateList['17'] = { stateCode: '17', state: 'LA', stateName: 'Louisiana' };
stateList['18'] = { stateCode: '18', state: 'ME', stateName: 'Maine' };
stateList['19'] = { stateCode: '19', state: 'MD', stateName: 'Maryland' };
stateList['23'] = { stateCode: '23', state: 'MS', stateName: 'Mississippi' };
stateList['24'] = { stateCode: '24', state: 'MO', stateName: 'Missouri' };
stateList['25'] = { stateCode: '25', state: 'MT', stateName: 'Montana' };
stateList['26'] = { stateCode: '26', state: 'NE', stateName: 'Nebraska' };
stateList['27'] = { stateCode: '27', state: 'NV', stateName: 'Nevada' };
stateList['28'] = { stateCode: '28', state: 'NH', stateName: 'New Hampshire' };
stateList['30'] = { stateCode: '30', state: 'NM', stateName: 'New Mexico' };
stateList['32'] = { stateCode: '32', state: 'NC', stateName: 'North Carolina' };
stateList['35'] = { stateCode: '35', state: 'OK', stateName: 'Oklahoma' };
stateList['36'] = { stateCode: '36', state: 'OR', stateName: 'Oregon' };
stateList['38'] = { stateCode: '38', state: 'RI', stateName: 'Rhode Island' };
stateList['39'] = { stateCode: '39', state: 'SC', stateName: 'South Carolina' };
stateList['40'] = { stateCode: '40', state: 'SD', stateName: 'South Dakota' };
stateList['41'] = { stateCode: '41', state: 'TN', stateName: 'Tennessee' };
stateList['42'] = { stateCode: '42', state: 'TX', stateName: 'Texas' };
stateList['43'] = { stateCode: '43', state: 'UT', stateName: 'Utah' };
stateList['44'] = { stateCode: '44', state: 'VT', stateName: 'Vermont' };
stateList['45'] = { stateCode: '45', state: 'VA', stateName: 'Virginia' };
stateList['47'] = { stateCode: '47', state: 'WV', stateName: 'West Virginia' };
stateList['52'] = { stateCode: '52', state: 'HI', stateName: 'Hawaii' };
stateList['54'] = { stateCode: '54', state: 'AK', stateName: 'Alaska' };
stateList['99'] = { stateCode: '99', state: 'CW', stateName: 'Country Wide' };
stateList['100'] = { stateCode: '100', state: 'ALL', stateName: 'All States' };

export const recipient = [
  'Ashley Jomant',  
  'Katelyn Crunk',
];
