import React from "react";
//Styles
import { Wrapper, Image } from "./DetailsImage.styles";
export default function DetailsImage({ srcImg, alt }) {
  return (
    <>
      <Wrapper>
        <Image src={srcImg} alt={alt} />
      </Wrapper>
    </>
  );
}
