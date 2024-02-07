export default function Comments({ comments }) {
  return (
    <List role="list">
      {comments.map((comment, index) => (
        <li key={index}></li>
      ))}
    </List>
  );
}
