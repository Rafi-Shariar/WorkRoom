import Link from "next/link";
import React from "react";

const MyWorkSpaces = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((workplace, index) => (
        <Link href={`/workplace/${workplace._id}`}>
        <div
          key={index}
          className="bg-white border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="borber border-b">
            <h2 className="text-2xl font-semibold text-blue-700 mb-1">
              {workplace.workplaceName}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              {workplace.companyName}
            </p>
          </div>
          <p className="text-sm text-gray-700 my-4">{workplace.description}</p>

          <div className="text-xs text-gray-400 space-y-1">
            <p>
              <span className="font-medium text-gray-600">Created On:</span>{" "}
              {workplace.date}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default MyWorkSpaces;
