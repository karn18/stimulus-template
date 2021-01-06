import { Application } from 'stimulus'

export const application = Application.start()

export function register(controllers) {
  const names = Object.keys(controllers)
  names.forEach(name => {
    application.register(name, controllers[name])
  })
}
