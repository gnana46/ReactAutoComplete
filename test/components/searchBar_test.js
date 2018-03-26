import {renderComponent, expect} from '../test_helper';
import SearchBar from '../../src/js/components/searchBar';

// use describe to grouph together similar test
describe('Search Bar', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(SearchBar);
  })
  it('has the correct class', () => {
    expect(component).to.have.class('search-bar');
  })
  // use 'it' to test a single attribute of a target
  it('has a input box', () => {
    expect(component.find('input')).to.exist;
  });
  it('it has a button', () => {
      expect(component.find('.btn-find')).to.exist;
  });

});
