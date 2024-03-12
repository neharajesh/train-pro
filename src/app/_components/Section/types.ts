import { ReactNode } from "react";

export type SectionProps = Readonly<{
  title: string | undefined;
  description?: string;
  children: ReactNode;
}>;
