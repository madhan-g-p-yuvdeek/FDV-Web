export const inquiriesTestData = [{
  ID: '111',
  group_code: 0,
  group_name: '',
  states: ['FL', 'DC'],
  identifier: 'State Premium',
  observation: 'Claim',
  observation_number: '',
  status: 'Open',
  created_by: '',
  create_date: '0001-01-01T00:00:00Z',
  conversation: {
    messages: [{
      created_by: '', create_date: '0001-01-01T00:00:00Z', assignee: 'Mark', message_text: '',
    },
    {
      created_by: '', create_date: '0001-01-01T00:00:00Z', assignee: 'Bill', message_text: '',
    }],
  },
}, {
  ID: '222',
  group_code: 0,
  group_name: '',
  states: ['NJ', 'NY'],
  identifier: 'State Premium',
  observation: 'Claim',
  observation_number: '',
  status: 'Open',
  created_by: '',
  create_date: '0001-01-01T00:00:00Z',
  conversation: {
    messages: [{
      created_by: '', create_date: '0001-01-01T00:00:00Z', assignee: 'Bob', message_text: '',
    }, {
      created_by: '', create_date: '0001-01-01T00:00:00Z', assignee: 'John', message_text: '',
    }],
  },
}];

export const inquiriesNoTestData = [];

export const messagesTestData = {
  inquiryId: '111',
  conversation: [{
    id: 'OU812',
    created_by: 'Rene A',
    create_date: '2022-05-27T18:39:26.084Z',
    assignee: 'Amanda Jones',
    message: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.',
  },
  {
    id: '5150Q',
    created_by: 'Amanda Jones',
    create_date: '2022-05-23T18:39:26.084Z',
    assignee: 'Rene A',
    message: 'Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  },
  ],
};
