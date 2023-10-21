import clsx, { ClassValue } from "clsx";
import {
  createTailwindMerge,
  getDefaultConfig,
  mergeConfigs,
} from "tailwind-merge";

const twMerge = createTailwindMerge(() =>
  mergeConfigs(getDefaultConfig(), {
    classGroups: {
      shadow: [{ shadow: ["card"] }],
    },
  })
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
