import React from "react";
import CalmLayout from "../../components/calmLayout/CalmLayout";
import CalmHome from "./CalmHome";

export default function Home({ theme }) {
  return (
    <CalmLayout theme={theme}>
      <CalmHome />
    </CalmLayout>
  );
}
