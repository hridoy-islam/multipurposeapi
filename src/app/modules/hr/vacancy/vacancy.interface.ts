import { Types } from "mongoose";

export interface TVacancy {
  _id: Types.ObjectId;
  title: string;
  description: string;
  location: string;
  employmentType? : "full_time" | "part_time" | "contract" | "internship";
  salaryRange?: {
    min?: Number;
    max?: Number;
    negotiable?: Boolean
  };
  skillsRequired?: string[];
  applicationDeadline?: Date;
  postedBy: Types.ObjectId;
  status?: "active" | "closed";
  createdAt?: Date;
  updatedAt?: Date;
}
