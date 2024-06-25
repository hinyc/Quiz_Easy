"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import axios from "axios";

interface CategoryPageProps {
  params: { category: string };
}
export default function CategoryPage(props: CategoryPageProps) {
  const { category } = props.params;

  useEffect(() => {
    if (category === "science") {
      axios
        .get(`http://localhost:3000/api/quiz?category=${category}`)
        .then((res) => {
          console.log("!!", res.data);
        });
    }
  }, [category]);
  return <div>{category}1</div>;
}
