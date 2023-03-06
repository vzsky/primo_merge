import { merge } from '../src/merge'

const randomNumber = () => Math.floor((Math.random() * 100))
const randomList = (size: number) => [...Array(size)].map(randomNumber)
const randomSortedList = (size: number) => randomList(size).map((a => (b:number) => a+=b)(0))

describe('random tools', () => {  
  it('should random correct sized list', () => {
    expect(randomSortedList(5)).toHaveLength(5)
    expect(randomSortedList(10)).toHaveLength(10)
  })

  it('should random numbers', () => {
    for (let i = 0; i <= 3; i++) {
      expect(randomSortedList(100).every((x, _, a) => x==a[0])).toBeFalsy 
    }
  })

  it('should random sorted list', () => {
    for (let i = 0; i <= 30; i++) {
      expect(randomSortedList(100).every((x, i, a) => x <= a[i+1])).toBeTruthy

    }
  })
})

describe('merge', () => {
  it('should have empty list as identity', () => {
    expect(merge([],[])).toStrictEqual([])
    for (let i = 0; i <= 100; i++) {
      let a = randomSortedList(10)
      expect(merge([],a)).toStrictEqual(a)
      expect(merge(a,[])).toStrictEqual(a)
    }
  })

  it('should merge simple sorted lists', () => {
    expect(merge([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6])
    expect(merge([1, 4, 6], [2, 3, 5])).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('should preserves length', () => {
    for (let i = 0; i <= 100; i++) {
      let length_a = randomNumber()
      let length_b = randomNumber()
      let a = randomSortedList(length_a)
      let b = randomSortedList(length_b)
      expect(merge(a, b)).toHaveLength(length_a + length_b)
    }
  })

  it('should merge sorted lists', () => {
    for (let i = 0; i <= 100; i++) {
      let a = randomSortedList(100)
      let b = randomSortedList(100)
      expect(merge(a, b).every((x, i, a) => x <= a[i+1])).toBeTruthy
    }
  })

})