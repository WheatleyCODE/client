export const transormPhone = (phone: string): string => {
  let nmbr = phone;

  if (typeof nmbr !== 'string') {
    nmbr = `${nmbr}`;
  }

  if (nmbr.length === 11) {
    nmbr = nmbr.slice(1);
  }

  return nmbr.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4');
};

export const transformPrice = (price: number | string): string => {
  let string = price;

  if (typeof string === 'number') {
    string = `${string}`;
  }

  const res = string
    .split('')
    .reverse()
    .map((str, i) => (i % 3 === 0 ? str + ' ' : str));

  res.reverse().push(' ₽');

  return res.join('');
};
