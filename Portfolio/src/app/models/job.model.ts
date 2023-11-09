import { IJob } from "./ijob.model";
import { skills } from "./job-skills.model";

export class Job implements IJob {
    title: string = "";
    company: string = "";
    description: string = "";
    startDate: string = "";
    finishDate: string = "";
    skills: skills[] = [];
}
