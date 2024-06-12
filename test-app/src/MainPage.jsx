import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: gray;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;
const Button = styled.button`
  color: ${(props) => (props.dark ? "white" : "dark")};
  background: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid black;
`;

const RoundButton = styled(Button)`
  border-radius: 16px;
`;

const blockItem = [
  {
    label: "1",
    padding: "1rem",
    background: "red",
  },
  {
    label: "2",
    padding: "3rem",
    background: "green",
  },
  {
    label: "3",
    padding: "4rem",
    background: "blue",
  },
];

export default function MainPage() {
  return (
    <Wrapper>
      <Title>안녕 리액트!</Title>
      <Button>Normal</Button>
      <Button dark>Dark</Button>
      <RoundButton>흠흐밍</RoundButton>
      <br></br>
      {blockItem.map((item) => (
        <div
          style={{
            padding: item.padding,
            background: item.background,
          }}
        >
          {item.label}
        </div>
      ))}
    </Wrapper>
  );
}
