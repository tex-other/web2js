'use strict';

module.exports = class Repeat {
  constructor(expression, statements) {
    this.expression = expression;
    this.statements = statements;
  }

  toString() {
    var code = `do {\n`;

    this.statements.forEach( function(v) {
      code = code + v.toString();
      code = code + "\n";      
    });
    
    code = code + `} while (${this.expression});`;
    

  return code;

  }
};
