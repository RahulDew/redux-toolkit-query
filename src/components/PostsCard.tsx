import React from "react";

const PostsCard = ({ post }: { post: Post }) => {
  return (
    <div style={styles.card}>
      <span style={styles.cardNo}>Card {post.id}</span>
      <p style={styles.cardTitle}>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostsCard;

const styles = {
  card: {
    backgroundColor: "aliceblue",
    borderRadius: "1rem",
    color: "black",
    padding: "1rem",
    margin: "1rem auto",
    textAlign: "Left",
  },
  cardNo: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  cardTitle: {
    fontSize: "1.2rem",
  },
};
