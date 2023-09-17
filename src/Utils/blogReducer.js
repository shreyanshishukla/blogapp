const initialState = [
  {
    title: "today",
    blogdata: "today is  good day",
    likes: 0,
  },
  {
    title: "strawberry",
    blogdata: "strawberries are red in colour not pink",
    likes: 0,
  },

  {
    title: "motivation",
    blogdata: "always take one step at a time",
    likes: 0,
  },
];
export default (state = initialState, actions) => {
  switch (actions.type) {
    case "add": {
      return [...state, actions.payload];
    }
    case "delete": {
      return state.filter((d, i) => i != actions.payload);
    }
    case "liketheblog": {
      return state.map((d, i) => {
        if (i != actions.payload) return d;
        return { ...d, likes: d.likes + 1 };
      });
    }
    case "edittheblog": {
      return state.map((d, i) => {
        if (i != actions.payload.index) return d;
        return { ...d, blogdata: actions.payload.blogdata };
      });
    }
    default:
      return state;
  }
};
