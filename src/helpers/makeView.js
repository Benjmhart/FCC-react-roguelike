export default function(screenSizeObj, heroCoordsArr) {
  const [herox, heroy] = heroCoordsArr;
  const { h, w } = screenSizeObj;

  const vh = h * 0.8;
  const vw = w;

  const smallerSize = vh < vw ? vh : vw;
  const pixelSize = Math.floor(smallerSize / 25);

  //console.log(`attempting to create array with vh: ${vh} and vw: ${vw} and pixelSize ${pixelSize}`)

  const XLengthUnadjusted = Math.round(vh / pixelSize);
  const YLengthUnadjusted = Math.round(vw / pixelSize);

  //console.log(`attempting to create array with XLength: ${XLengthUnadjusted} and YLength: ${YLengthUnadjusted}`)

  const XLength =
    XLengthUnadjusted % 2 === 1 ? XLengthUnadjusted : XLengthUnadjusted - 1;
  const YLength =
    YLengthUnadjusted % 2 === 1 ? YLengthUnadjusted : YLengthUnadjusted - 1;

  const centerX = Math.floor(XLength / 2);
  const centerY = Math.floor(YLength / 2);

  const XAdder = centerX * -1 + herox;
  const YAdder = centerY * -1 + heroy;

  //console.log(`attempting to create array with XLength: ${XLength} and YLength: ${YLength}`)

  const xArray = new Array(XLength);
  const yArray = new Array(YLength);

  const filledYArray = yArray.fill(1);
  const arrOfOnes2d = xArray.fill(filledYArray);

  const viewArr = arrOfOnes2d.map((row, x) => {
    const newRow = row.map((cell, y) => {
      const cellObj = {
        x: x + XAdder,
        y: y + YAdder
      };
      return cellObj;
    });
    return newRow;
  });

  return viewArr;
}
