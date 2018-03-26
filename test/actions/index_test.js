import { expect } from '../test_helper';
import { GET_SUGGESTIONS } from '../../src/js/actions/types';
import { getSuggestions } from '../../src/js/actions';

describe('action', () => {
  describe('getSuggestions', () => {
    it('has the correct type', () => {
      const action = getSuggestions();
      expect(action.type).to.equal(GET_SUGGESTIONS);
    });
  });
})
