export const cutter = (string) => {
  const cut = string.slice(0,20)
  const cutArray = cut.split('')

  if(cutArray.at(-1)  === ' ') {
    cutArray.pop()
    return cutArray.join('') +  '...'
  }
  return cutArray.join()
}