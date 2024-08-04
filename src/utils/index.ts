export const shortName = (name: string) => {
  const words = name?.split(" ");
  const firstLetters = words?.map((word) => word[0]?.toUpperCase());
  return firstLetters?.join("");
};

export const updateData = (data, action) => {
  // Find the index of the employer with the matching _id
  const index = data.findIndex((item: any) => item.id === action.payload.id);
  if (index !== -1) {
    // Replace the employer at the found index with the updated data
    data[index] = action.payload;
  }
};

export const deleteData = (data, action) => {
  // Filter out the employer with the matching _id

  return data.filter((item: any) => item.id !== action.payload);
};
