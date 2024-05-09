import { Observable } from "rxjs"

const numbers = [1, 5, 10]

const sourceInstance = new Observable((subscriber) => {
  let index = 0
  const produceValue = () => {
    subscriber.next(numbers[index++])
  }

  produceValue()
})

sourceInstance.subscribe({
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log("complete"),
})
