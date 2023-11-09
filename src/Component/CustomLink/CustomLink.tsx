import React, { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

export function CustomLink({ children, to, ...props }: CustomLinkProps) {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "#e91e1e" : "blue",
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
