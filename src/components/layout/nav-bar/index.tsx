import type { Category } from "src/types/category";
import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";

import {
  TOP_HEAD_HEIGHT,
  DESKTOP_NAVBAR_WIDTH,
  MOBILE_NAVBAR_HEIGHT,
} from "src/configs/layout";
import { colors, breakpoints } from "src/configs/theme";
import { getCategoryList } from "src/apis";

interface INavBar {
  open: boolean;
}

export default function NavBar({ open }: INavBar) {
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
    <Continaer open={open}>
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
  display: ${({ open }: { open: boolean }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: ${TOP_HEAD_HEIGHT}px;
  width: 100%;
  height: ${MOBILE_NAVBAR_HEIGHT}px;
  overflow-y: auto;
  z-index: 999;
  background-color: #fff;
  @media (min-width: ${breakpoints.md}) {
    position: fixed;
    width: ${DESKTOP_NAVBAR_WIDTH}px;
    height: calc(100vh - ${TOP_HEAD_HEIGHT}px);
    border-right: 1px solid ${colors.divider.main};
  }
`;

const NavItem = styled.div`
  width: 100%;
  padding: 16px;
  color: #666666;
  font-size: 28px;
  font-weight: 400;
  border-bottom: 1px solid ${colors.divider.main};
  cursor: pointer;

  @media (min-width: ${breakpoints.md}) {
    border-bottom: none;
    &:hover {
      color: ${colors.primary.main};
      border-radius: 16px;
      background-color: #cce0ff;
    }
  }
`;

const Title = styled.p`
  color: ${colors.primary.light};
  padding: 0px 16px;
  font-weight: 700;
`;
