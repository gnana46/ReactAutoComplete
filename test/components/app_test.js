import {renderComponent, expect} from '../test_helper';
import App from '../../src/js/components/app';

// use describe to grouph together similar test
describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  it('shows a header', () => {
      expect(component.find('header')).to.exist;
  });
  it('shows a footer', () => {
      expect(component.find('footer')).to.exist;
  });
  it('shows a search bar', () => {
      expect(component.find('.search-bar input')).to.exist;
  });
  it('shows a header Logo', () => {
      expect(component.find('.icon-quandoo.logo')).to.exist;
  });
});
