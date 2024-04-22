import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const STEP_1 = 1
export const STEP_2 = 2
export const STEP_3 = 3
export const STEP_4 = 4
export const STEP_5 = 5
