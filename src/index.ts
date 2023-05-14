import express,{  Application, Request, Response, Router } from 'express';
import dotenv from 'dotenv'
import { GetAll, GetById, UpdateAccountCharts, CreateAccountChart, DeleteAccountChart } from './service/accountsCharts';
import { accountscharts } from '@prisma/client';
dotenv.config();

const app: Application = express();
const port = process.env.PORT;
const router = Router();

//#region Accounts Charts Endpoints
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

app.use(router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});