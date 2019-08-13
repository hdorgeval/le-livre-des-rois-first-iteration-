export const extractNameFrom = (line: string): string => {
  return line
    .replace(/#/gi, '')
    .replace(/>/gi, '')
    .trim();
};
