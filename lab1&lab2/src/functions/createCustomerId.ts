import { Category } from "../enums"
import {CustomWorker} from "../interfaces"

export const createCustomerId: (customerName: string, customerId: number) => string = function (
  customerName: string,
  customerId: number
): string {
  return `${customerName} - ${customerId}`;
};