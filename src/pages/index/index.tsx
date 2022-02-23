import { NextSeo } from "next-seo";
import type { VFC } from "react";
import { Button } from "src/component/Button";

export const Index: VFC = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <NextSeo
      title="Alexohneander - Softwarearchitekt"
      description="Then with a short description here."
    />
  );
};
