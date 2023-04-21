export const callTaggedTemplate = (
  strings: TemplateStringsArray,
  shape: string,
  isBlue: boolean
) => {
  const str1 = strings[0];
  const str2 = strings[1];

  const strIsBlue = isBlue ? "it's blue" : "it's not blue";

  return `${str1}${shape}${str2}${strIsBlue}`;
};
