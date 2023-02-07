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
      {categoryList.map((category) => (
        <NavItem key={category.id}>
          <Link href={`/posts/category/${category.id}`}>{category.name}</Link>
        </NavItem>
      ))}
    </Continaer>
  );
}

const Continaer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const NavItem = styled.div`
  color: #333333;
  font-size: 28px;
  font-weight: 500;
  margin: 15px 0px;
  &:hover {
    color: #737373;
  }
`;

const Title = styled.h1`
  color: ${colors.primary.main};
`;
