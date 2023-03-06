export const merge = (collection_1: number[], collection_2: number[]): number[] => {
  let merged:number[] = []
  let i = 0, j = 0
  while (i < collection_1.length && j < collection_2.length) {
    merged.push(collection_1[i] <= collection_2[j] ? collection_1[i++] : collection_2[j++])
  }
  while (i < collection_1.length) {
    merged.push(collection_1[i++])
  }
  while (j < collection_2.length) {
    merged.push(collection_2[j++])
  }
  return merged
}