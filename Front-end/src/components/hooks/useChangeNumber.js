//Chuyển số lớn cho có dấu chấm
export const changeNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
