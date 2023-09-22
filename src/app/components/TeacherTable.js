"use client";
import Link from "next/link";
import Table from "./Table";

const TeacherTable = () => {
  const columns = [
    {
      name: "National ID Number",
      selector: (row) => row.national_id_number,
    },

    {
      name: "Name",
      selector: (row) => `${row.title} ${row.firstname} ${row.lastname}`,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.date_of_birth,
    },

    {
      name: "Teacher Number",
      selector: (row) => row.teacher_number,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div className=" md:flex  flex-col md:flex-row flex-wrap md:space-x-10 ">
          <div>
            <Link
              href="#"
              className="text-green-400 hover:text-green-600 cursor-pointer font-semibold"
            >
              View
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="text-green-400 hover:text-green-600 cursor-pointer font-semibold"
            >
              Edit
            </Link>
          </div>

          <div className="text-green-400 hover:text-green-600 cursor-pointer font-semibold">
            Delete
          </div>
        </div>
      ),
    },
  ];

  const teachers = [
    {
      national_id_number: "ACDE12345",
      title: "Mr.",
      firstname: "Jax",
      lastname: "Moss",
      date_of_birth: "20-03-1997",
      teacher_number: "ACDE12345",
      salary: "2000",
    },
    {
      national_id_number: "ACDE12345",
      title: "Miss",
      firstname: "Jane",
      lastname: "Doe",
      date_of_birth: "20-03-1997",
      teacher_number: "ACDE12345",
      salary: "2000",
    },
    {
      national_id_number: "ACDE12345",
      title: "Prof",
      firstname: "Jonh",
      lastname: "Doe",
      date_of_birth: "20-03-1997",
      teacher_number: "ACDE12345",
      salary: "",
    },
  ];
  return <Table columns={columns} data={teachers} />;
};

export default TeacherTable;
