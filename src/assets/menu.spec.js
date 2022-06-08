import MenuItems from './menu';

describe('Menu Component when user Role is Data Viewer', () => {
  const menuItems = MenuItems('Data Viewer');

  test('Menu should have 8 main options.', () => {
    expect(menuItems.items.length).toEqual(8);
  });

  test('Menu should have display the 8 options', () => {
    expect(menuItems.items[0].heading).toEqual('Deviations');
    expect(menuItems.items[1].heading).toEqual('Call Data');
    expect(menuItems.items[2].heading).toEqual('Edits');
    expect(menuItems.items[3].heading).toEqual('Notifications');
    expect(menuItems.items[4].heading).toEqual('Tools');
    expect(menuItems.items[5].heading).toEqual('Publications and Training');
    expect(menuItems.items[6].heading).toEqual('Administration');
    expect(menuItems.items[7].heading).toEqual('About');
  });
  test('Deviation item should have only 5 child menu links', () => {
    expect(menuItems.items[0].child[0].title).toEqual('Active Deviations');
    expect(menuItems.items[0].child[1].title).toEqual('Combined Deviation History');
    expect(menuItems.items[0].child[2].title).toEqual('Request Deviation Report');
    expect(menuItems.items[0].child[3].title).toEqual('DSR Level Data');
    expect(menuItems.items[0].child[4].title).toEqual('NAIC Premium data');
    expect(menuItems.items[0].child.includes('Monthly Weights')).toBe(false);
    expect(menuItems.items[0].child.includes('Expected Deviation Override')).toBe(false);
  });
});

describe('Menu Component when user Role is Data Supplier', () => {
  const menuItems = MenuItems('DATA SUPPLIER');
  test('Call Data item should have only 7 child menu links', () => {
    expect(menuItems.items[1].child[0].title).toEqual('Search Call Data');
    expect(menuItems.items[1].child[1].title).toEqual('Create Call Data');
    expect(menuItems.items[1].child[2].title).toEqual('Copy Call Data');
    expect(menuItems.items[1].child[3].title).toEqual('Import Call Data');
    expect(menuItems.items[1].child[4].title).toEqual('Export Call Data');
    expect(menuItems.items[1].child[5].title).toEqual('Validate Call Data');
    expect(menuItems.items[1].child[6].title).toEqual('Submit Call Data');
    expect(menuItems.items[1].child.includes('Expected Deviation Override')).toBe(false);
  });
});
