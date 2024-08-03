export const shortName = (name: string) => {
  const words = name?.split(" ");
  const firstLetters = words?.map((word) => word[0]?.toUpperCase());
  return firstLetters?.join("");
};
