import { Denomination } from './atm.model';

export class Withdraw {
    static readonly type = '[ATM] Withdraw';
    constructor(public payload: number) {}
}

export class Stock {
    static readonly type = '[ATM] Stock';
    constructor(public payload: Denomination[]) {}
}
