import Navbar from "@/app/components/Navbar";
import React from "react";
import CreateNewTeam from "../components/CreateNewTeam";
import getWorkplaceTasks from "@/lib/getWorkplaceTasks";
import TasksContainer from "../components/TasksContainer";
import DeleteWorkPlace from "../components/DeleteWorkPlace";
import AddMember from "../components/AddMember";

const WorkPlaceDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/workplace/${p.id}`
  );
  const data = await res.json();

  const tasks = await getWorkplaceTasks(p.id);

  return (
    <div className="max-w-7xl mx-auto min-h-screen p-2">
      <Navbar />

      <section className="mt-16 px-8 py-10 bg-white max-w-5xl rounded-3xl shadow-2xl border border-slate-200">
  <div className="space-y-4">
    <h1 className="text-2xl md:text-3xl text-slate-700 leading-snug">
      Welcome to the
      <br />
      <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        {data?.workplaceName}
      </span>{" "}
      Workspace
    </h1>

    <div className="grid md:grid-cols-3 gap-6 text-base md:text-lg text-slate-600 mt-6">
      <div>
        <span className="font-semibold text-slate-800">Company Name</span><br />
        {data?.companyName}
      </div>
      <div>
        <span className="font-semibold text-slate-800">Created Date</span><br />
        {data?.date}
      </div>
      <div>
        <span className="font-semibold text-slate-800">Created By</span><br />
        {data?.createdBy}
      </div>
    </div>
  </div>
</section>


      <section>
        <AddMember/>
      </section>

      <section>
        <div className="border p-10 rounded-2xl border-blue-400 bg-gradient-to-r from-blue-200 to-blue-100 mt-10">
          <div className="flex flex-col md:flex-row justify-between">
            <h1 className="text-3xl font-semibold">Manage Task</h1>
            <CreateNewTeam data={data} />
          </div>

          <div className="divider "></div>

          <div className="mt-6">
            <TasksContainer tasks={tasks} />
          </div>
        </div>
      </section>

      <section className="mt-16 flex justify-center">
        <DeleteWorkPlace id={p.id}/>
      </section>
    </div>
  );
};

export default WorkPlaceDetailsPage;
