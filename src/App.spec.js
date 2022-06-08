import Header from '@ncci/react-header';
import Footer from '@ncci/react-footer';
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app-wrapper').length).toEqual(1);
  });

  it('should render the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('should render the Header component with the corect App Acronym', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).props().appAcronym).toBe('RST');
  });

  it('should render the Header component with the correct App Name ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).props().appName).toBe(
      'React Starter with @redux/toolkit'
    );
  });

  it('should render the Header component with isExternal set to true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).props().isExternal).toBe(true);
  });

  it('should render the Header component with notifications set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).props().notifications).toBe(false);
  });

  it('should render the Footer component with isExternal set to true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).props().isExternal).toBe(true);
  });

  it('should render the Footer component with the copyRight year as 2010', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).props().copyRight).toBe(2010);
  });
});
