function maskify(cc) {
  let hiddenText = cc.slice(0, -4).replace(/./g, "#");
  let shownText = cc.slice(-4);

  console.log("maskify: ", hiddenText + shownText);

  return hiddenText + shownText;
}

maskify("test012");
