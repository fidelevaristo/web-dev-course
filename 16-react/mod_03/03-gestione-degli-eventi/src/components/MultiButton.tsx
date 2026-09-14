export function MultiButton() {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.name);
  }

  return (
    <>
      <button name="one" onClick={handleClick}>
        One
      </button>

      <button name="two" onClick={handleClick}>
        Two
      </button>

      <button name="three" onClick={handleClick}>
        Three
      </button>
    </>
  );
}
