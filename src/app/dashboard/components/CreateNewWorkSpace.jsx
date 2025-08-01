"use client";
import Image from "next/image";
import React from "react";
import createImg from "../../assets/dashbaordImages/meeting.png";
import { dateFormatter } from "@/utils/dateFormatter";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const CreateNewWorkSpace = () => {
  const { data: session } = useSession();

  const handleCreateWorkplace = async (e) => {
    e.preventDefault();

    const workplaceName = e.target.workplaceName.value;
    const description = e.target.description.value;
    const companyName = e.target.companyName.value;
    const date = dateFormatter();
    const createdBy = session?.user?.name;
    const creatorEmail = session?.user?.email;

    const payload = {
      workplaceName,
      description,
      companyName,
      date,
      createdBy,
      creatorEmail,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/workplace`, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const postedRes = await res.json();

      if (postedRes.acknowledged) {
        toast.success("New Work Place Added");
        e.target.reset();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }

    document.getElementById("my_modal_1").close();
  };

  return (
    <div className="mt-3 md:mt-0">
    

      <button
        className="btn bg-blue-500 text-white rounded-full"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Work Space
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Create New Workspace</h3>

          <form onSubmit={handleCreateWorkplace} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Workspace Name
              </label>
              <input
                type="text"
                placeholder="Enter workspace name"
                className="input input-bordered w-full"
                name="workplaceName"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <input
                type="text"
                placeholder="Enter description"
                className="input input-bordered w-full"
                name="description"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="input input-bordered w-full"
                name="companyName"
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
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default CreateNewWorkSpace;
