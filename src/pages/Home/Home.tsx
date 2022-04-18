interface HomeProps {}

export default function Home({}: HomeProps): JSX.Element {
  // Logic here...

  return (
    <>
      <h1 data-testid="title">Home</h1>
      <p>This is home</p>
    </>
  )
}
