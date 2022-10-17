const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    (value === undefined) ? this.chain.push(`( )`) : this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ( !Number.isInteger(position) || position <= 0 || position > this.chain.length ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this;
  },
  finishChain() {
    const chain = [...this.chain].join('~~');
    this.chain.length = 0;
    return chain;
  }
};

module.exports = {
  chainMaker
};
