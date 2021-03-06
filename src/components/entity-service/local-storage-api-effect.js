// @TODO: Think about (and do) put all actions here as component actions.
// This should then be epics.
export default function create ({
  localStorage,
  objectMerge,
  objectOmit,
  uuidV4,
  entityType,
  setStateTrigger
}) {
  function create () {
    return readAll()
    .then((state) => {
      const id = uuidV4()
      const newState = JSON.stringify(objectMerge(state, {[id]: {}}))
      localStorage.setItem(entityType, newState)
      return id
    })
    .then((id) => {
      updateCache()
      return {id}
    })
  }

  // @TODO: Have one fn for setStateTrigger and one fn for getting the localStorage
  function readAll () {
    return Promise.resolve(
      JSON.parse(localStorage.getItem(entityType) || '{}')
    )
  }

  function updateCache () {
    return readAll()
    .then((state) => {
      setTimeout(() => {
        setStateTrigger(state)
      }, 1000)
    })
  }

  function update (id, field, value) {
    return readAll()
    .then((state) => {
      const entityState = objectMerge(state[id], {[field]: value})
      const newState = JSON.stringify(objectMerge(state, {[id]: entityState}))
      localStorage.setItem(entityType, newState)
    })
    .then(() => {
      updateCache()
      return {}
    })
  }

  function remove (id) {
    return readAll()
    .then((state) => {
      const newState = JSON.stringify(objectOmit([id], state))
      localStorage.setItem(entityType, newState)
    })
    .then(() => {
      updateCache()
      return {}
    })
  }

  return {
    create,
    readAll,
    update,
    updateCache,
    remove
  }
}
