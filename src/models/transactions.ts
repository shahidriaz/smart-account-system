export interface Transactions
{
    transactionId:number;
    transactionNumber:number;
    transactionDate: Date;
    accountId:number;
    debit:number;
    credit:number;
    narration:string
}