export const shortName = (name: string) => {
  const words = name?.split(" ");
  const firstLetters = words?.map((word) => word[0]?.toUpperCase());
  return firstLetters?.join("");
};

export const updateData = (data: any, action: any) => {
  // Find the index of the employee with the matching _id
  const index = data.findIndex((item: any) => item.id === action.payload.id);
  if (index !== -1) {
    // Replace the employee at the found index with the updated data
    data[index] = action.payload;
  }
  return data;
};

export const deleteData = (data: [], action: any) => {
  // Filter out the employee with the matching _id

  return data.filter((item: any) => item.id !== action.payload);
};
