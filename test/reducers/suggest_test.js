import { expect } from '../test_helper';
import suggestionReducer from '../../src/js/reducers/suggest';
import { GET_SUGGESTIONS } from '../../src/js/actions/types';

describe('suggestion Reducer', () => {
  it('handle action with unknow type', () => {
    expect(suggestionReducer(undefined, {})).to.eql({});
  });
  it('handle action of type GET_SUGGESTIONS', () => {
    let response = {"_type": "Suggestions", "queryContext": {"originalQuery": "gnana"}, "suggestionGroups": [{"name": "Web", "searchSuggestions": [{"url": "https:\/\/www.bing.com\/search?q=gnanasangama+kar+in&FORM=USBAPI", "displayText": "gnanasangama kar in", "query": "gnanasangama kar in", "searchKind": "WebSearch"}, {"url": "https:\/\/www.bing.com\/search?q=gnana&FORM=USBAPI", "displayText": "gnana", "query": "gnana", "searchKind": "WebSearch"}, {"url": "https:\/\/www.bing.com\/search?q=gnanasangama&FORM=USBAPI", "displayText": "gnanasangama", "query": "gnanasangama", "searchKind": "WebSearch"}, {"url": "https:\/\/www.bing.com\/search?q=gnanaraj&FORM=USBAPI", "displayText": "gnanaraj", "query": "gnanaraj", "searchKind": "WebSearch"}, {"url": "https:\/\/www.bing.com\/search?q=gnanasangama+kar+nic+in&FORM=USBAPI", "displayText": "gnanasangama kar nic in", "query": "gnanasangama kar nic in", "searchKind": "WebSearch"}, {"url": "https:\/\/www.bing.com\/search?q=jnanabhumi&FORM=USBAPI", "displayText": "jnanabhumi", "query": "jnanabhumi", "searchKind": "WebSearch"}, {"url": "https:\/\/www.bing.com\/search?q=gnanamani&FORM=USBAPI", "displayText": "gnanamani", "query": "gnanamani", "searchKind": "WebSearch"}, {"url": "https:\/\/www.bing.com\/search?q=gnanaboomi&FORM=USBAPI", "displayText": "gnanaboomi", "query": "gnanaboomi", "searchKind": "WebSearch"}]}]};
    const action = { type: GET_SUGGESTIONS, payload: {response}};
    expect(suggestionReducer({}, action)).to.eql({response});
  });
});
