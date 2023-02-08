import type { Category } from "src/types/category";
import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";

import colors from "src/configs/colors";
import { getCategoryList } from "src/apis";

export default function Navigation() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const loadCategoryList = async () => {
    try {
      const response = await getCategoryList();
      setCategoryList(response.data);
    } catch {
      setCategoryList([]);
    }
  };

  useEffect(() => {
    loadCategoryList();
  }, []);

  return (
    <Continaer>
      <Title>Category</Title>
      {categoryList.map((category) => (
        <Link
          key={category.id}
          href={`/posts/category/${category.id}`}
          style={{ width: "100%" }}
        >
          <NavItem>{category.name}</NavItem>
        </Link>
      ))}
    </Continaer>
  );
}

const Continaer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 2rem;
`;

const NavItem = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  color: #666666;
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: ${colors.primary.main};
    background-color: #cce0ff;
  }
`;

const Title = styled.p`
  color: #666666;
  padding: 0px 12px;
  font-weight: 700;
`;
