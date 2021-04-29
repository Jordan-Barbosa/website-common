import { Subjects } from '../../subjects';

export interface ProjectCreatedEvent {
  subject: Subjects.ProjectCreated;
  data: {
    id: string;
    name: string;
    desc: string;
    url: string;
    github: string;
    technology: string[];
    isHeroku: boolean;
  };
}
