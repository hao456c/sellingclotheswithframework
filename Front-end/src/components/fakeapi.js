const oldDate = new Date().toLocaleString();

export const getComment = async () => {
  return [
    {
      id: 1,
      comment: "hahahahah",
      created_at: oldDate,
      userid: 1,
      name: "jack",
      parentid: null,
      rating: 3,
    },
    {
      id: 2,
      comment: "nice",
      created_at: oldDate,
      userid: 2,
      name: "vivivi",
      parentid: null,
      rating: 2,
    },
    {
      id: 3,
      comment: "nice",
      created_at: oldDate,
      userid: 2,
      name: "johny",
      parentid: 1,
      rating: null,
    },
  ];
};
const id = Math.floor(Math.random() * 100) + 1;
export const createcomment = async (text, parentid = null, rating) => {
  const currentDate = new Date().toLocaleString();
  return {
    id: id,
    comment: text,
    created_at: currentDate,
    userid: 1,
    name: "jack",
    parentid: parentid,
    rating: rating,
  };
};
export const createreply = async (text, parentid) => {
  const currentDate = new Date().toLocaleString();
  return {
    id: id,
    comment: text,
    created_at: currentDate,
    userid: 1,
    name: "jack",
    parentid: parentid,
  };
};
