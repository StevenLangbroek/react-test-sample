export default (initialState: Object, handlers: Object): Function => (state = initialState, action: Action): Object => {
  const handler = handlers[action.type]

  return handler ? handler(state, action) : state
}
