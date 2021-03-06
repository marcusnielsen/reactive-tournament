import React from 'react'
import ConnectObserver from '../../../utils/connect-observer'
import {merge as objectMerge} from 'ramda'
import Landing from '../landing/viewable'
import Login from '../login/viewable'
import UserList from '../user-list/viewable'
import View from './view'

export default function create ({model}) {
  const landing = Landing({model: model.children.landing})
  const login = Login({model: model.children.login})
  const userList = UserList({model: model.children.userList})

  const children = {
    landing,
    login,
    userList
  }

  const view = View({
    React,
    ConnectObserver,
    children,
    defaultChild: model.defaultChild,
    state_: model.state_
  })

  const viewable = {
    children,
    view
  }

  return objectMerge(
    model,
    viewable
  )
}
