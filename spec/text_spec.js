'use strict';
const {newPage} = require('../lib/mechanize/page');

describe('Mechanize/Form/Text', () => {
  var text, form;

  beforeEach(() => {
    var agent, url, response, body, code, page;
    agent = {
      submit: function (form, button, headers, requestOptions, fn) {
        var page = {};
        fn(null, page);
      }
    };
    url = 'form.html';
    response = {};
    body = fixture('form_elements.html');
    code = null;
    page = new Page(url, response, body, code, agent);

    form = page.form('form1');

  });

  describe('text field', () => {
    beforeEach(() => {
      text = form.field('text');
    });

    it('should not be disabled', () => {
      expect(text.disabled).toEqual(false);
    });
  });

  describe('disabled text field', () => {
    beforeEach(() => {
      text = form.field('textDisabled');
    });

    it('should be disabled', () => {
      expect(text.disabled).toEqual(true);
    });
  });
});
