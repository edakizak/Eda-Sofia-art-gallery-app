export default function Comments({ comments }) {
  return (
    <div role="list">
      {comments.map((comment, index) => (
        <li key={index}>
          <p>
            <q>{comment}</q>
          </p>
        </li>
      ))}
    </div>
  );
}
