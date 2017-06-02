export default (state = {
  isInitialized: false
}, { type, ...config }) => {
  switch (type) {
    case 'APP_INITIALIZE':
      return {
        ...state,
        isInitialized: true
      }
    default:
      return state
  }
}
