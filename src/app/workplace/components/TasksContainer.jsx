import Link from "next/link";
import React from "react";

const TasksContainer = ({ tasks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task, index) => (
        <Link href={`/task/${task._id}`}>
          <div
            key={index}
            className="bg-slate-50 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all h-full flex flex-col justify-between"
          >
            <h1 className="text-2xl text-blue-600 font-semibold">
              {task?.taskTitle}
            </h1>
            <h3 className="text-lg mt-2">
              <strong>Category:</strong> {task?.taskCategory}
            </h3>
            <p className="text-xm border p-2 text-gray-500 rounded-lg my-3 bg-slate-100">
              <strong>Description:</strong> <br />
              {task?.description?.slice(0, 60)}...
            </p>
            <p className="border-t pt-2">
              <strong>Deadline:</strong>{" "}
              {new Date(task?.deadline).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TasksContainer;
