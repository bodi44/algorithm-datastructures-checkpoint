class Stack {
  constructor() {
    this._storage = []
  }

  push(value) {
    return this._storage.push(value)
  }

  pop() {
    return this._storage.pop()
  }

  peek() {
    return this._storage[this._storage.length - 1]
  }

  size() {
    return this._storage.length
  }
}

module.exports = Stack

