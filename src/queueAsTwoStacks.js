const Stack = require('./stack')

class QueueAsTwoStacks {
  constructor() {
    this._stackIn = new Stack()
    this._stackOut = new Stack()
  }

  enqueue(value) {
    return this._stackIn.push(value)
  }

  dequeue() {
    if (this._stackOut.size() === 0) this.moveElementsToStackOut()
    return this._stackOut.pop()
  }

  head() {
    if (this._stackOut.size() === 0) this.moveElementsToStackOut()
    return this._stackOut.peek()
  }

  tail() {
    if (this._stackIn.size() === 0) this.moveElementsToStackIn()
    return this._stackIn.peek()
  }

  size() {
    return this._stackIn.size() + this._stackOut.size()
  }

  moveElementsToStackOut() {
    while (this._stackIn.size() > 0) {
      this._stackOut.push(this._stackIn.pop())
    }
  }

  moveElementsToStackIn() {
    while (this._stackOut.size() > 0) {
      this._stackIn.push(this._stackOut.pop())
    }
  }
}

module.exports = QueueAsTwoStacks
