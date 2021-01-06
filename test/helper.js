import { Application } from 'stimulus'

export const application = Application.start()

// Controllers is a hash object that contains name and controller pair
// Example:
//   { "hello": HelloController }
export function register(controllers) {
  const names = Object.keys(controllers)
  names.forEach(name => {
    application.register(name, controllers[name])
  })
}
