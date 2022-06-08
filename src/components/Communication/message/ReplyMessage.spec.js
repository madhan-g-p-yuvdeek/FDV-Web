import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import ReplyMessage from './ReplyMessage';

describe('ReplyMessage component', () => {
  const spyOnClose = jest.fn();
  const mockInquiryId = '62795a5fdebac4d4c66b2751';
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ReplyMessage inquiryId={mockInquiryId} onClose={spyOnClose} />
      </Provider>
    );
  });

  it('should render Recipient select box.', () => {
    const recipientSelect = screen.queryAllByTestId('ReplyMessage-Recipient-Select');
    expect(recipientSelect.length).toBe(1);
  });

  // it('should  render send button.', () => {
  //   const sendButton = screen.queryAllByTestId('ReplyMessage-Send-Button');
  //   expect(sendButton.length).toBe(1);
  // });

  afterEach(cleanup);
});

// describe('reply message send button', () => {
//   const spyOnClose = jest.fn();
//   const mockInquiryId = '62795a5fdebac4d4c66b2751';

//   it('should not call handleReplyRefresh when message is empty.', () => {
//     render(
//       <Provider store={store}>
//         <ReplyMessage inquiryId={mockInquiryId} onClose={spyOnClose} />
//       </Provider>
//     );
//     expect(screen.getByTestId('ReplyMessage-Cancel-Button')).toBeInTheDocument();
//     const sendButton = screen.getByTestId('ReplyMessage-Send-Button');
//     fireEvent.click(sendButton);

//     expect(spyOnClose).toHaveBeenCalledTimes(0);
//   });
// });
