import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import NewInquiry from './NewInquiry';

describe('NewInquiry Closed', () => {
  const spyOnCloseNewInquiry = jest.fn();

  beforeEach(() => {
    render(<Provider store={store}><NewInquiry openModal={false} anchorEl={[]} onCloseNewInquiry={spyOnCloseNewInquiry} /></Provider>);
  });

  it('should not render Popover by default.', () => {
    const testPopover = screen.queryAllByTestId('NewInquiry-Popover');
    expect(testPopover.length).toBe(0);
  });

  afterEach(cleanup);
});

describe('NewInquiry Opened, Invalid Form', () => {
  const spyOnCloseNewInquiry = jest.fn();

  beforeEach(() => {
    render(<Provider store={store}><NewInquiry openModal anchorEl={[]} onCloseNewInquiry={spyOnCloseNewInquiry} /></Provider>);
  });

  it('should render Popover when openModal is true.', () => {
    const testPopover = screen.queryAllByTestId('NewInquiry-Popover');
    expect(testPopover.length).toBe(1);
  });

  it('should display error message after clicking on Send', () => {
    const testErrorMessageMissing = screen.queryAllByTestId('NewInquiry-Error-Text');
    expect(testErrorMessageMissing.length).toBe(0);

    const testSaveButton = screen.getByTestId('NewInquiry-Send-Button');
    fireEvent.click(testSaveButton);

    const testErrorMessage = screen.queryAllByTestId('NewInquiry-Error-Text');
    expect(testErrorMessage.length).toBe(1);
  });

  afterEach(cleanup);
});

describe('NewInquiry Opened, Valid Form', () => {
  const spyOnCloseNewInquiry = jest.fn();

  beforeEach(() => {
    render(<Provider store={store}><NewInquiry openModal anchorEl={[]} onCloseNewInquiry={spyOnCloseNewInquiry} /></Provider>);
  });

  it('should render Popover when openModal is true.', () => {
    const testPopover = screen.queryAllByTestId('NewInquiry-Popover');
    expect(testPopover.length).toBe(1);
  });

  afterEach(cleanup);
});
