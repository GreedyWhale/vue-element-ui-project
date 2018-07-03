const closeLoading = (isLoading) => {
  if (isLoading) {
    isLoading.close()
    isLoading = null
  }
  return isLoading
}
export { closeLoading }
