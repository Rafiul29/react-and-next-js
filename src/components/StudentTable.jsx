import Form from "./Form";
import { Table } from "./Table";

const StudentTable = () => {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <Form />
        </div>
        <Table />
      </div>
    </section>
  );
};

export default StudentTable;
