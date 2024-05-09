import { Observable, filter, map } from "rxjs"

const numbers = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const sourceInstance = new Observable((subscriber) => {
  let index = 0
  const produceValue = () => {
    if (index < numbers.length) setTimeout(produceValue, 1000)
    else subscriber.complete()
    subscriber.next(numbers[index++])
  }

  produceValue()
})

sourceInstance.pipe(map((n: number) => n * 2)).subscribe({
  next: (x: number) => console.log(`map: ${x}`),
  error: (e: Error) => console.log(e),
  complete: () => console.log("complete"),
})

sourceInstance.pipe(filter((n: number) => n > 5)).subscribe({
  next: (x: number) => console.log(`filter: ${x}`),
  error: (e: Error) => console.log(e),
  complete: () => console.log("complete"),
})
