export function errorMessage(error) {
  if (error.code && error.message) {
    return { code: error.code, message: error.message }
  }
  return error.toString()
}
