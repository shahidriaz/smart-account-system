import express,{  Application, Request, Response, Router } from 'express';
import dotenv from 'dotenv'

import { accounting, accountscharts } from '@prisma/client';
dotenv.config();

const app: Application = express();
const port = process.env.PORT;
const router = Router();

//#region Accounts Charts Endpoints
import { GetAll, GetById, UpdateAccountCharts, CreateAccountChart, DeleteAccountChart } from './service/accountsCharts';
router.route("/accountsChart").get((req: Request, res: Response) => {
    GetAll().then(data=>{
        return res.send(data);
    });
});
router.route("/accountsChart/:id").get((req: Request, res: Response) => {
    let accountsChartsId : number;
    accountsChartsId = parseInt(req.params.id);
    GetById(accountsChartsId).then(data=>{
        return res.send(data);
    });
});
router.route("/accountsChart/:id").put((req: Request, res: Response) => {
    let accountsChartsId : number;
    let modifiedChart: accountscharts = req.body.accountsChart as accountscharts;
    accountsChartsId = parseInt(req.params.id);
    UpdateAccountCharts(accountsChartsId, modifiedChart).then(data=>{
        return res.send(data);
    });
});
router.route("/accountsChart").post((req: Request, res: Response) => {
    let newAccountChart: accountscharts = req.body.accountsChart as accountscharts;
    CreateAccountChart(newAccountChart).then(data=>{
        return res.send(data);
    });
});
router.route("/accountsChart/:id").delete((req: Request, res: Response) => {
    let accountsChartsId : number;
    accountsChartsId = parseInt(req.params.id);
    DeleteAccountChart(accountsChartsId).then(data=>{
        return res.send(data);
    });
});
//#endregion

//#region Accounts Charts Endpoints
import {GetAllTransactions,GetTransactionById, UpdateTransaction, CreateTransaction, DeleteTransaction} from './service/transactionsService';
router.route("/transactions").get((req: Request, res: Response) => {
    GetAllTransactions().then(data=>{
        return res.send(data);
    });
});
router.route("/transactions/:id").get((req: Request, res: Response) => {
    let transactionid : number;
    transactionid = parseInt(req.params.id);
    GetTransactionById(transactionid).then(data=>{
        return res.send(data);
    });
});
router.route("/transactions/:id").put((req: Request, res: Response) => {
    let transactionid : number;
    let modifiedTransaction: accounting = req.body.accounting as accounting;
    transactionid = parseInt(req.params.id);
    UpdateTransaction(transactionid, modifiedTransaction).then(data=>{
        return res.send(data);
    });
});
router.route("/transactions").post((req: Request, res: Response) => {
    let newTransaction: accounting = req.body.accounting as accounting;
    CreateTransaction(newTransaction).then(data=>{
        return res.send(data);
    });
});
router.route("/transactions/:id").delete((req: Request, res: Response) => {
    let transactionid : number;
    transactionid = parseInt(req.params.id);
    DeleteTransaction(transactionid).then(data=>{
        return res.send(data);
    });
});
//#endregion

app.use(router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});