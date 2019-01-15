export function testAction() {
  try {
    console.log('test')
  } catch (e) {
    console.log(e)
  } finally {
    console.log('done')
  }
}
