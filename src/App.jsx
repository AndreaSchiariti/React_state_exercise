import { Counter } from "./Counter";

export function App () {
  return (
    <div>
      <Counter startingValue={0} valueToAddOrRemove={1}/>
    </div>
  )
}