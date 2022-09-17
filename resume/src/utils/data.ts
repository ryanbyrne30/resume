export const randPct = () => {
  return Math.random() * 100;
};

export const randInt = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const randChoice = (L: string[]) => {
  const idx = Math.floor(Math.random() * L.length);
  return L[idx];
};

export const randNorm = () => {
  let u = 1 - Math.random(); //Converting [0,1) to (0,1)
  let v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};
