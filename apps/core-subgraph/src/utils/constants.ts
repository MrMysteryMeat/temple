import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts';


export const BIG_INT_1E18 = BigInt.fromString('1000000000000000000');
export const BIG_INT_1E7 = BigInt.fromString('10000000');
export const BIG_INT_0 = BigInt.fromI32(0);
export const BIG_INT_1 = BigInt.fromI32(1);

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18');
export const BIG_DECIMAL_1E7 = BigDecimal.fromString('1e7');
export const BIG_DECIMAL_0 = BigDecimal.fromString('0');

export const OPS_MANAGER_LOCAL = '0x2e2ed0cfd3ad2f1d34481277b3204d807ca2f8c2';
export const TEMPLE_LOCAL_ADDRESS = Address.fromString('0x5fbdb2315678afecb367f032d93f642f64180aa3');