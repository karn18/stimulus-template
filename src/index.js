import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ 'element' ]

  connect () {
    console.warn("WARNING!!! You can use this controller with caution")
    console.log("hello")
  }
}
