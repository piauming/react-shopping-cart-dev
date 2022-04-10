export const toDecimalPlace = (numString, unit) => {
    const num = Number(numString);
    return (Math.round(num * 100) / 100).toFixed(unit);
  }