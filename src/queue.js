class Queue {
  constructor() {
    this._storage = []
  }

  enqueue(value) {
    return this._storage.push(value)
  }

  dequeue() {
    return this._storage.shift()
  }

  head() {
    return this._storage[0]
  }

  tail() {
    return this._storage[this._storage.length - 1]
  }

  contains(value) {
    return this._storage.indexOf(value) !== -1
  }

  size() {
    return this._storage.length
  }
}

module.exports = Queue
