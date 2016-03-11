export default (fn, ...args) => (event) => {
  event.preventDefault()

  return fn(...args)
}
