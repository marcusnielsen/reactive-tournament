export default function create ({initialRoute, ramdaMerge, setRouteSuccess}) {
  const initialState = {
    route: initialRoute
  }

  const setRouteSuccessReducer = setRouteSuccess
  .map(function onMap (route) {
    return function reduce (stateObject) {
      return ramdaMerge(
        stateObject,
        {route}
      )
    }
  })

  const state = setRouteSuccessReducer
  .scan(function onScan (stateObject, reduce) {
    return reduce(stateObject)
  }, initialState)

  return state
}
