const RandomUserPic = () => {
  // Generate a random number between 1 and 6 (uniform distribution)
  const num = Math.floor(Math.random() * 6) + 1;
  return `/userProfile/${num}.png`;
};

export default RandomUserPic;
