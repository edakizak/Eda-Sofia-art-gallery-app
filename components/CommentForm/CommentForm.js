export default function CommentForm({ onSubmitComment }) {
  return (
    <form>
      <div>
        <label>Comment: </label>
        <input type="text" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
