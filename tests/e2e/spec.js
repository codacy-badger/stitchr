const Application = require('spectron').Application
const assert = require('assert')
const path = require('path')

let electronPath = path.join(__dirname, '..', '..', 'out', `stitchr-${process.platform}-${process.arch}`, 'stitchr')

if (process.platform === 'win32') {
  electronPath += '.exe'
}

describe('Application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, '..', '..')],
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
    return null
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })

  it('has the correct title', function () {
    return this.app.client.getTitle().then(function (title) {
      assert.equal(title, 'Stitchr')
    })
  })
})
