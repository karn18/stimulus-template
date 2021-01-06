import { register } from './helper'
import TemplateController from '../src/index'

const startStimulus = () => {
  // const application = Application.start()
  // application.register('template', TemplateController)
  const controllers = {
    'template': TemplateController
  }
  register(controllers)
}

describe('Template Controller', () => {
  beforeEach(() => {
    startStimulus();
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
