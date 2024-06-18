import { useRouter } from "next/router";
import React from "react";

interface CategoryPageProps {
  params: { category: string };
}
export default function CategoryPage(props: CategoryPageProps) {
  const { category } = props.params;

  console.log("??", props.params, category);

  return <div>{category}</div>;
}
