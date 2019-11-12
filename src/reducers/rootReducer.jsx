const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle laid an Egg",
      body: "Lorem ipsum,dolor sit amet consolor"
    },
    {
      id: "2",
      title: "Charmander laid an Egg",
      body: "Lorem ipsum,dolor sit amet consolor"
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body: "Lorem ipsum,dolor sit amet consolor"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
