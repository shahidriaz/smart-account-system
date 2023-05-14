
import { Prisma, PrismaClient, accounting } from "@prisma/client";
const prisma = new PrismaClient()



// GET ALL Transactions from the accounting Table
export const GetAllTransactions = async(): Promise<accounting[]> =>{
    let result = await prisma.accounting.findMany();
    console.table(result);
    return result;
}
export const GetTransactionById = async(id:number): Promise<accounting | null> =>{
    let result = await prisma.accounting.findUnique({
        where:{
            transactionid: id
        }
    });
    console.table(result);
    return result;
}
export const UpdateTransaction = async(id:number, updatedRecord: accounting): Promise<accounting | null> =>{
    const result = await prisma.accounting.update({
        where:{
            transactionid:id
        },
        data:{
            credit:updatedRecord.credit,
            debit: updatedRecord.debit,
            accountid: updatedRecord.accountid,
            narration:updatedRecord.narration,
            Transaction_Date: updatedRecord.Transaction_Date,
            Transaction_No:updatedRecord.Transaction_No,
        }
    });
    console.table(result);
    return result;
}
export const CreateTransaction = async(newTransaction: accounting): Promise<accounting | null> =>{
    const result =  await prisma.accounting.create({
        data: {
            accountid: newTransaction.accountid,
            credit:newTransaction.credit,
            debit:newTransaction.debit,
            narration:newTransaction.narration,
            Transaction_Date:newTransaction.Transaction_Date,
            Transaction_No:newTransaction.Transaction_No,
        },
      })
    console.table(result);
    return result;
}
export const DeleteTransaction = async(transactionNumber: number): Promise<Prisma.BatchPayload | null> =>{
    const deletedTransactions = await prisma.accounting.deleteMany({
        where:{
            Transaction_No: {
                in: transactionNumber
            }
        }
    });
    console.table(deletedTransactions);
    return deletedTransactions;
}