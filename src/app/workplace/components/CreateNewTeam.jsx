"use client";
import { dateFormatter } from "@/utils/dateFormatter";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const CreateNewTeam = ({ data }) => {
    const router = useRouter();
  const handleCreateTeam = async (e) => {

    e.preventDefault();

    const taskTitle = e.target.taskTitle.value;
    const taskCategory = e.target.taskCategory.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    const date = dateFormatter();
    const workplaceID = data?._id;
    const workplaceCreator = data?.creatorEmail;
    const companyName = data?.companyName;

    const payload = {
     taskTitle,
     taskCategory,
     description,
     deadline,
     date,
     workplaceID,
     workplaceCreator,
     companyName
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/task`, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const postedRes = await res.json();

      if (postedRes.acknowledged) {
        toast.success("New Task Added");
        e.target.reset();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) { toast.error("Something went wrong!");}

    document.getElementById('my_modal_1').close();
    router.refresh();

  };

  return (
    <div className="mt-3 md:mt-0">
      <button
        className="btn bg-blue-500 text-white rounded-full"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Task
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Add New Task</h3>

          <form onSubmit={handleCreateTeam} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter Task Title"
                className="input input-bordered w-full"
                name="taskTitle"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Task Category
              </label>
              <input
                type="text"
                placeholder="Enter Task Category"
                className="input input-bordered w-full"
                name="taskCategory"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                type="text"
                placeholder=""
                className="input input-bordered w-full h-[150px]"
                name="description"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                DeadLine
              </label>
              <input
                type="date"
                className="input input-bordered w-full"
                name="deadline"
                required
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn btn-neutral"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
              <button className="btn btn-primary ml-2" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default CreateNewTeam;
