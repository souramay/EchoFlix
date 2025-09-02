const RandomUserPic = () => {
  // returns /useprofile/1.png .. /useprofile/4.png
  return "/userProfile/" + (Math.floor(Math.random() * 4) + 1) + ".png";
};

export default RandomUserPic;
