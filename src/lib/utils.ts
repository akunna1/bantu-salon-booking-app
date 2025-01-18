import { clsx, type ClassValue } from "clsx" // created by shadcn
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
