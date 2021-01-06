import { register } from './helper'
import TemplateController from '../src/index'

const startStimulus = () => {
  const controllers = {
    'template': TemplateController
  }
  register(controllers)
}

beforeAll(() => {
  startStimulus()
})

describe('Template Controller', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="template">
        <h1 data-template-target="output"></h1>
      </div>
    `
  })

  test('H1 should show `Hello, Stimulus!`', () => {
    expect(document.querySelector('[data-template-target="output"]').textContent).toBe("Hello, Stimulus!");
  })
})
