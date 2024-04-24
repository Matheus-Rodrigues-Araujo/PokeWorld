const getSpritesURL = (obj, arr) => {
  for (let key in obj) {
    if (key === "versions") {
      continue;
    }

    if (typeof obj[key] === "string" && obj[key].startsWith("http")) {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      getSpritesURL(obj[key], arr);
    }
  }
  return arr.reverse();
};

export default getSpritesURL;
