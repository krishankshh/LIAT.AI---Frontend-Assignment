import { MotionValue } from "framer-motion";

export interface Store {
  id: string;
  name: string;
  category: string;
  level: number;
  corridor: string;
  pathId: string;
}

export interface MallStats {
  label: string;
  value: string;
  sub: string;
}

export interface MallData {
  stats: MallStats[];
  directory: Store[];
  categories: string[];
  levels: number[];
  sections: {
    intro: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  cta: {
    leasing: { text: string; email: string };
    sponsorship: { text: string; email: string };
  };
}

export interface NarrativeSlideProps {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: React.ReactNode;
  align?: "center" | "left" | "right";
}
