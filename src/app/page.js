import Counter from "./counter";

export default function Home () {
  return (
    <main>

      <h1>Counter </h1>
      <Counter />
      <br></br>
      <br></br>
      <h1>Custom Counter</h1>
      <Counter initialCount={5} initialStep={2} />

    </main>
  )
}