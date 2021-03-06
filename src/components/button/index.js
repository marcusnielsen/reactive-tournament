import {async as mostAsync} from 'most-subject'
import {merge as objectMerge} from 'ramda'
import Actions from './actions'
import State from './state'
export {default as variants} from './variants'

export default function create ({provider, name, variant}) {
  const {colorTheme} = provider
  // @TODO: delayMs should be set as a part of the global animation style.
  const actions = Actions({mostAsync, delayMs: 500})
  const state_ = State({
    objectMerge,
    press_: actions.streams.press,
    unpress_: actions.streams.unpress
  })

  const labels = {
    name,
    variant
  }

  return {
    colorTheme,
    labels,
    actions,
    state_
  }
}
