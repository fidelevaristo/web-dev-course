function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John' });
    }, 1000);
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: userName,
        posts: ['Post 1', 'Post 2', 'Post 3']
      });
    }, 1000);
  });
}

fetchUserData()
  .then((user) => {
    console.log("Utente recuperato:", user.name);
    return fetchUserPosts(user.id, user.name);
  })
  .then((data) => {
    console.log(`Post di ${data.user}:`, data.posts);
  })
  .catch((error) => {
    console.error("Errore nella catena di Promise:", error);
  });
