import {baseSepolia, localhost} from 'viem/chains';
import { generateContractHook } from '@/hooks/contracts';
import BuyMeACoffeeABI from './BuyMeACoffeeABI';

/**
 * Returns contract data for the BuyMeACoffee contract.
 */
export const useBuyMeACoffeeContract = generateContractHook({
  abi: BuyMeACoffeeABI,
  [baseSepolia.id]: {
    chain: baseSepolia,
    address: '0xcE0EBD0282e247553eb8fDdeE3281b5EC09ddD16',
  },
  [localhost.id]: {
    chain: localhost,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  },
  // ... more chains for this contract go here
});
