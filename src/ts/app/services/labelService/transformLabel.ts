export const transformLabel = (value: string): string => {
  const labelArr = value.split(' ').map((item, index) => {
    if (index === 0) return item.charAt(0).toLowerCase() + item.slice(1);
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  return labelArr.join('');
};
