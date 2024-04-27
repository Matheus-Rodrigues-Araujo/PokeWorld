const filteredPokemon = (arr, inputValue) => {
  const filtered = arr.value.filter(
    (item) =>
      item.name.includes(inputValue.value.toLowerCase()) ||
      item.id.toString() === inputValue.value
  );
  return filtered
};

export default filteredPokemon;
