import { Router } from "express";
import { sendReminders } from "../cotrollers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post("/subscription/reminder", sendReminders);

export default workflowRouter;
