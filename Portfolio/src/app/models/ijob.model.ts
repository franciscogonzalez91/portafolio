import { ISkills } from "./ijob-skills.model";

export interface IJob {
    title: string;
    company: string;
    description: string;
    startDate: string;
    finishDate: string;
    skills: ISkills[];
}
