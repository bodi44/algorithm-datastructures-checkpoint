const assert = require('assert')
const Queue = require('../src/queue')

describe('testing Queue class', () => {
  it('should create Queue class', () => {
    assert.equal(typeof new Queue(), 'object')
  })

  it('should add items to Queue', () => {
    const testQueue = new Queue()
    testQueue.enqueue(1)
    testQueue.enqueue(2)

    assert.equal(testQueue.size(), 2)
    assert.equal(testQueue.contains(1), true)
  })

  it('should remove items from Queue', () => {
    const testQueue = new Queue()
    testQueue.enqueue(1)
    testQueue.enqueue(2)

    assert.equal(testQueue.size(), 2)
    assert.equal(testQueue.contains(2), true)

    testQueue.dequeue()
    assert.equal(testQueue.size(), 1)
    assert.equal(testQueue.contains(1), false)
  })

  it('should show Queue head', () => {
    const testQueue = new Queue()
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    assert.equal(testQueue.head(), 1)
  })

  it('should show Queue tail', () => {
    const testQueue = new Queue()
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    assert.equal(testQueue.tail(), 3)
  })

  it('should show if Queue contains element correctly', () => {
    const testQueue = new Queue()
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    assert.equal(testQueue.contains(1), true)
    assert.equal(testQueue.contains(3), true)
    assert.equal(testQueue.contains(4), false)
  })

  it('should show Queue size', () => {
    const testQueue = new Queue()
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    assert.equal(testQueue.size(), 3)
    testQueue.enqueue(4)
    assert.equal(testQueue.size(), 4)
  })
})
