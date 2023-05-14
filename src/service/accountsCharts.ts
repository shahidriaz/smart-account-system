// Import Accounts Charts Interface
import { AccountsCharts } from "../models/accountsCharts";
import { PrismaClient, accountscharts } from '@prisma/client'
const prisma = new PrismaClient()



// GET ALL ACCOUNT CHARTS
export const GetAll = async(): Promise<accountscharts[]> =>{

    let result = await prisma.accountscharts.findMany();
    console.table(result);
    return result;
}
export const GetById = async(id:number): Promise<accountscharts | null> =>{
    let individualAccountChart = await prisma.accountscharts.findUnique({
        where:{
            accountid: id
        }
    });
    console.table(individualAccountChart);
    return individualAccountChart;
}
export const UpdateAccountCharts = async(id:number, updatedRecord: accountscharts): Promise<accountscharts | null> =>{
    const updatedCharts = await prisma.accountscharts.update({
        where:{
            accountid:id
        },
        data:{
            Account_Type:updatedRecord.Account_Type,
            accountname: updatedRecord.accountname
        }
    });
    console.table(updatedCharts);
    return updatedCharts;
}
export const CreateAccountChart = async(incomingNewChart: accountscharts): Promise<accountscharts | null> =>{
    const newAccountCharts =  await prisma.accountscharts.create({
        data: {
          Account_Type: incomingNewChart.Account_Type,
          accountname: incomingNewChart.accountname,
        },
      })
    console.table(newAccountCharts);
    return newAccountCharts;
}
export const DeleteAccountChart = async(id: number): Promise<accountscharts | null> =>{
    const deletedUser = await prisma.accountscharts.delete({
        where:{
            accountid: id 
        }
    });
    console.table(deletedUser);
    return deletedUser;
}

