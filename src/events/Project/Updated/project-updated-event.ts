import { Subjects } from '../../subjects';

export interface ProjectUpdatedEvent {
  subject: Subjects.ProjectUpdated;
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
