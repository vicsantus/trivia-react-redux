const initialState = {
  ranking: [
    { name: '', score: 10, picture: '' },
  ],
  token: 0,
};

const token = (state = initialState, action) => {
  switch (action.type) {
  // case '':
  //   return '';

  default:
    return state;
  }
};

export default token;