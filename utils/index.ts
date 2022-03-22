export const transormPhone = (phone: string): string => {
  let nmbr = phone;

  if (typeof nmbr !== 'string') nmbr = `${nmbr}`;

  if (nmbr.length === 11) nmbr = nmbr.slice(1);

  return nmbr.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4');
};

export const transformPrice = (price: number | string): string => {
  let string = price;

  if (typeof string === 'number') string = `${string}`;

  const res = string
    .split('')
    .reverse()
    .map((str, i) => (i % 3 === 0 ? str + ' ' : str));

  res.reverse().push(' ₽');

  return res.join('');
};

interface OnWin {
  onWinHandler: () => void;
  onWinReturnHandler: () => void;
}

export const disableScroll = (onWin?: OnWin): (() => void) => {
  document.body.style.overflow = 'hidden';
  document.body.style.width = '100%';

  const { platform } = window.navigator;

  if (platform === 'Win32') {
    document.body.style.paddingRight = '17px';
    onWin?.onWinHandler();
  }

  return () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0px';
    onWin?.onWinReturnHandler();
  };
};
