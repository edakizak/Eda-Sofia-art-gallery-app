import styled from "styled-components";

const Form = styled.form`
  width: 50%;
  border-radius: 2px;
  display: flex;
  align-self: center;
  flex-direction: column;
`;
const Label = styled.label`
  font-family: "Courier";
  align-self: center;
  justify-content: center;
`;
const Textarea = styled.textarea`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  align-self: center;
  gap: 10px;
  margin: 20px;
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: black;
  background-color: #eeeeee;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #eeeeee;
  border-radius: 40px 40px 40px 40px;
  padding: 16px 24px 16px 28px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;
  box-shadow: -1px -1px 2px 0px #eeeeee, 1px 1px 2px 0px;
`;
const Button = styled.button`
  align-self: center;
  justify-content: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: black;
  color: white;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  font-family: "Courier";
  transition: background-color 0.3s ease;
  &:hover. comment-submit-button {
    background-color: #d5f009;
    color: black;
  }
`;

export default function CommentForm({ addComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment(slug, comment.value);
    event.target.reset();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="comment"> Comment: </Label>
      <Textarea type="text" name="comment" />
      <Button className="comment-submit-button" type="submit" required>
        Submit
      </Button>
    </Form>
  );
}
