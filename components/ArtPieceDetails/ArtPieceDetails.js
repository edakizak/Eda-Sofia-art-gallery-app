import Image from "next/image";

import Link from "next/link";
import styled from "styled-components";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

const Button = styled.button`
align-self: flex-start;
  gap: 10px;
  width: 100px;
  margin-top: 20 px;
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
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Courier";
  }
`;
const ContainerText = styled.text`
  font-family: "Courier";
`;

const ImageContainer = styled.image`
  margin: 20px;
`;

export default function ArtPieceDetails({
  image,
  name,
  artist,
  year,
  genre,
  addComment,
  comments,
  slug,
}) {
  return (
    <>
      <Container>
        <Link href="/art-pieces">
          <Button>← Back</Button>
        </Link>
        <h1> Art Pieces Details</h1>
        <ImageContainer>
          <Image src={image} height={300} width={400} alt={name} />
        </ImageContainer>
        <ContainerText>
          <h2> {name} </h2>
          <p> Year: {year}</p>
          <p> Genre: {genre}</p>
          <p> Artist: {artist}</p>
        </ContainerText>
        {comments && <Comments comments={comments} />}
        <CommentForm slug={slug} addComment={addComment} />
      </Container>
    </>
  );
}
