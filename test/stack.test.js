const assert = require('assert')
const Stack = require('../src/stack')

describe('testing Stack class', () => {
  it('should create Stack class', () => {
    assert.equal(typeof new Stack(), 'object')
  })

  it('should push items to Stack', () => {
    const testStack = new Stack()
    testStack.push(1)

    assert.equal(testStack.size(), 1)
  })

  it('should pop items from Stack', () => {
    const testStack = new Stack()
    testStack.push(1)
    assert.equal(testStack.size(), 1)
    testStack.pop()
    assert.equal(testStack.size(), 0)
  })

  it('should return correct peek of Stack', () => {
    const testStack = new Stack()
    testStack.push(1)
    testStack.push(2)
    assert.equal(testStack.peek(), 2)
    testStack.push(3)
    assert.equal(testStack.peek(), 3)
  })

  it('should return correct size of Stack', () => {
    const testStack = new Stack()
    testStack.push(1)
    testStack.push(2)
    assert.equal(testStack.peek(), 2)
    testStack.push(3)
    assert.equal(testStack.size(), 3)
  })
})
