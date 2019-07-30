const assert = require('assert')
const Queue = require('../src/queue')
const QueueAsTwoStacks = require('../src/queueAsTwoStacks')

describe('testing QueueAsTwoStacks class', () => {
  it('should create QueueAsTwoStacks class', () => {
    assert.equal(typeof new QueueAsTwoStacks(), 'object')
  })

  it('should add items to QueueAsTwoStacks', () => {
    const testQueueAsTwoStacks = new QueueAsTwoStacks()
    const testQueue = new Queue()

    testQueueAsTwoStacks.enqueue(1)
    testQueueAsTwoStacks.enqueue(2)
    testQueue.enqueue(1)
    testQueue.enqueue(2)

    assert.equal(testQueueAsTwoStacks.size(), testQueue.size())
  })

  it('should remove items from QueueAsTwoStacks', () => {
    const testQueueAsTwoStacks = new QueueAsTwoStacks()
    const testQueue = new Queue()

    testQueueAsTwoStacks.enqueue(1)
    testQueueAsTwoStacks.enqueue(2)
    testQueue.enqueue(1)
    testQueue.enqueue(2)

    assert.equal(testQueueAsTwoStacks.size(), testQueue.size())

    testQueueAsTwoStacks.dequeue()
    testQueue.dequeue()
    assert.equal(testQueueAsTwoStacks.size(), testQueue.size())
  })

  it('should show QueueAsTwoStacks head', () => {
    const testQueueAsTwoStacks = new QueueAsTwoStacks()
    const testQueue = new Queue()

    testQueueAsTwoStacks.enqueue(1)
    testQueueAsTwoStacks.enqueue(2)
    testQueueAsTwoStacks.enqueue(3)
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    assert.equal(testQueueAsTwoStacks.head(), testQueue.head())
  })

  it('should show QueueAsTwoStacks tail', () => {
    const testQueueAsTwoStacks = new QueueAsTwoStacks()
    const testQueue = new Queue()

    testQueueAsTwoStacks.enqueue(1)
    testQueueAsTwoStacks.enqueue(2)
    testQueueAsTwoStacks.enqueue(3)
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    assert.equal(testQueueAsTwoStacks.tail(), testQueue.tail())
  })

  it('should show Queue size', () => {
    const testQueueAsTwoStacks = new QueueAsTwoStacks()
    const testQueue = new Queue()

    testQueueAsTwoStacks.enqueue(1)
    testQueueAsTwoStacks.enqueue(2)
    testQueueAsTwoStacks.enqueue(3)
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    assert.equal(testQueueAsTwoStacks.size(), testQueue.size())
    testQueueAsTwoStacks.enqueue(4)
    testQueue.enqueue(4)
    assert.equal(testQueueAsTwoStacks.size(), testQueue.size())
  })
})
