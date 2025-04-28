import { Types } from "mongoose";

export interface TAttendance {
  _id: Types.ObjectId;
  userId: string;
  clockIn: Date;
  clockOut?: Date;
  location?: {
    latitude?: number;
    longitude?: number;
    address?: string;
  };
  source: "access_control" | "desktop_app" | "mobile_app";
  deviceId?: string;
  approvalRequired: boolean;
  approvalStatus: "pending" | "approved" | "rejected";
  approvedBy?: string;
  approvedAt?: Date;
  notes?: string;
  breakTimes?: {
    breakStart: Date;
    breakEnd: Date;
  }[];
  screenshots?: {
    url: string;
    capturedAt : Date;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}
