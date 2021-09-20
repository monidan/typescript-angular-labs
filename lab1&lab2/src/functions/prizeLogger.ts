import { PrizeLogger } from '../interfaces';

const logPrize: PrizeLogger = function(prize: string): void {
  console.log(`Prize is ${prize}`);
} 

export default logPrize;