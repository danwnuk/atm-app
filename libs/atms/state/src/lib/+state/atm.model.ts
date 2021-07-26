export interface ATM {
    denominations: Denomination[];
}

export enum ATMAction {
    Withdraw, Stock
}

export interface ATMHistory {
    date: Date;
    action: ATMAction;
    success: boolean;
    message: string;
}

export interface Denomination {
    value: number;
    amountInStock: number;
}

export interface ATMStateModel {
    atm: ATM;

    history: ATMHistory[];
}
