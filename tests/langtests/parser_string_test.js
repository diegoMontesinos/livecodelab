var parser  = require('../../src/generated/parser');
var ast     = require('../../src/js/lcl/ast').Node;

exports.programdata = {

  'simple string assignment passes': function (test) {

    var program = `a = "string"`;
    var parsed = parser.parse(program);

    var expected = ast.Block([
      ast.Assignment('a', ast.Str('string'))
    ]);

    test.deepEqual(parsed, expected);
    test.done();
  },

  'string with whitespace passes': function (test) {

    var program = `a = "string  sdf\tasdf"`;
    var parsed = parser.parse(program);

    var expected = ast.Block([
      ast.Assignment('a', ast.Str('string  sdf\tasdf'))
    ]);

    test.deepEqual(parsed, expected);
    test.done();
  },

  'squote string with other dquote char passes': function (test) {

    var program = `a = 'stri"asdf'`;
    var parsed = parser.parse(program);

    var expected = ast.Block([
      ast.Assignment('a', ast.Str('stri"asdf'))
    ]);

    test.deepEqual(parsed, expected);
    test.done();
  },

  'dquote string with other squote char passes': function (test) {

    var program = `a = "stri'asdf"`;
    var parsed = parser.parse(program);

    var expected = ast.Block([
      ast.Assignment('a', ast.Str("stri'asdf"))
    ]);

    test.deepEqual(parsed, expected);
    test.done();
  }

};
