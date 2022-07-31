/** @jsxImportSource @emotion/react */
import { Fragment } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";

function CssProp() {
  return (
    <div
      css={css({
        fontFamily: "Arial",
        backgroundColor: "#999",
        color: "#fff",
      })}
    >
      <p>Hello World</p>
    </div>
  );
}

const StyledButtonComponent = styled.button(
  {
    backgroundColor: "orangered",
    color: "white",
    border: "none",
    margin: 5,
    outline: "3px solid orange",
  },
  (props) =>
    props.veriant === "primary"
      ? { color: "black", background: "Yellow", outlineColor: "orangered" }
      : null,
  (props) =>
    props.veriant === "secondary"
      ? { color: "white", background: "blue", outlineColor: "purple" }
      : null
);

// another alternative of withComponent is "as" prop
const A = styled(StyledButtonComponent.withComponent("a"))`
  text-decoration: none;
`;

const Child = styled.div({
  color: "red",
});

const Parent = styled.div({
  [Child]: {
    color: "green",
  },
});

const danger = css`
  color: red;
`;

const base = css`
  color: blue;
`;

function EmotionCompRenderer() {
  return (
    <Fragment>
      <CssProp />
      <StyledButtonComponent>I'm Normal Button</StyledButtonComponent>
      <StyledButtonComponent veriant="primary">
        I'm Primary Button
      </StyledButtonComponent>
      <StyledButtonComponent veriant="secondary">
        I'm Secondary Button
      </StyledButtonComponent>
      <A veriant="primary" href="/">
        I'm Link
      </A>
      <Parent>
        <Child>green</Child>
      </Parent>
      <Child>red</Child>
      <p css={base}>NORMAL</p>
      <p css={[base, danger]}>Danger</p>
      <div
        css={{
          color: "darkorchid",
          "& .bold": {
            color: "#000",
            fontWeight: 600,
          },
          "@media(max-width: 900px)": {
            "& .bold": {
              color: "green",
            },
          },
        }}
      >
        I'm <span className="bold">Bold!</span>
      </div>
    </Fragment>
  );
}

export default EmotionCompRenderer;
