import httpStatus from "http-status";

import AppError from "../../../errors/AppError";
import QueryBuilder from "../../../builder/QueryBuilder";

import { Attendance } from "./attendance.model";
import { AttendanceSearchableFields } from "./attendance.constant";
import { TAttendance } from "./attendance.interface";

const getAttendanceFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(Attendance.find().populate("userId"), query)
    .search(AttendanceSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await userQuery.countTotal();
  const result = await userQuery.modelQuery;

  return {
    meta,
    result,
  };
};


const getSingleAttendanceFromDB = async (id: string) => {
  const result = await Attendance.findById(id);
  return result;
};

const createAttendanceIntoDB = async (payload: TAttendance) => {
  try {
    const result = await Attendance.create(payload);
    return result;
  } catch (error: any) {
    console.error("Error in createAttendanceIntoDB:", error);

    // Throw the original error or wrap it with additional context
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Failed to create Attendance"
    );
  }
};

const updateAttendanceIntoDB = async (
  id: string,
  payload: Partial<TAttendance>
) => {
  const notice = await Attendance.findById(id);

  if (!notice) {
    throw new AppError(httpStatus.NOT_FOUND, "Attendance not found");
  }

  // Toggle `isDeleted` status for the selected user only
  // const newStatus = !user.isDeleted;

  // // Check if the user is a company, but only update the selected user
  // if (user.role === "company") {
  //   payload.isDeleted = newStatus;
  // }

  // Update only the selected user
  const result = await Attendance.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const AttendanceServices = {
    getAttendanceFromDB,
    getSingleAttendanceFromDB,
    createAttendanceIntoDB,
    updateAttendanceIntoDB,
};
