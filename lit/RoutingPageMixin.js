import { registerRoute, unregisterRoute, locationMatch, getPagePathFromEl } from '../routify'

export const RoutingPageMixin = (base) => {
  return class Base extends base {
    static get properties () {
      return {
        active: { type: Boolean }
      }
    }

    connectedCallback () {
      super.connectedCallback()
      registerRoute(this)
    }

    disconnectedCallback () {
      super.disconnectedCallback()
      unregisterRoute(this)
    }

    // Only render this page if it's actually visible.
    shouldUpdate () {
      return this.active
    }

    locationMatch (checker) {
      return locationMatch(getPagePathFromEl(this), checker)
    }
  }
}
