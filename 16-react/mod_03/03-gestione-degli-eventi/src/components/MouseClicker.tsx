export function MouseClicker() {
  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.name);
  }

  function handleImageClick(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();

    console.log(event.currentTarget.src);
  }

  return (
    <button name="one" onClick={handleButtonClick}>
      <img
        src="https://picsum.photos/50"
        alt="Example"
        onClick={handleImageClick}
      />
    </button>
  );
}
