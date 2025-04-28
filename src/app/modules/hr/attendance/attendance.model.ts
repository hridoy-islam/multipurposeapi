/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from "mongoose";

import { TAttendance } from "./attendance.interface";

const attendanceSchema = new Schema<TAttendance>(
  {
    userId: {
      type: String,
      required: true,
      ref: "User",
    },
    clockIn: {
      type: Date,
      required: true,
    },
    clockOut: {
      type: Date,
    },
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
      address: { type: String },
    },
    source: {
      type: String,
      default: "mobile_app",
    },
    deviceId: {
      type: String,
    },
    approvalRequired: {
      type: Boolean,
    },
    approvalStatus: {
      type: String,
    },
    approvedBy: {
      type: String,
    },
    approvedAt: {
      type: Date,
    },
    notes: {
      type: String,
    },
    breakTimes: [
      {
        breakStart: { type: Date },
        breakEnd: { type: Date },
      },
    ],
    screenshots: [
      {
        url: { type: String },
        capturedAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Attendance = model<TAttendance>("Attendance", attendanceSchema);
