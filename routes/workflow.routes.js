import { Router } from "express";
import { sendRenewalReminder } from "../cotrollers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post("/subscription/reminder", sendRenewalReminder);

export default workflowRouter;
