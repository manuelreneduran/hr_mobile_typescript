import { action } from '@storybook/addon-actions'

// this eliminates the syntheticEvent errors that occur with
// the traditional 'action' function
export const partialAction = (actionName) => {
  const beacon = action(actionName)
  return (eventObj, ...args) => {
    beacon({ ...eventObj, view: undefined }, ...args)
  }
}
