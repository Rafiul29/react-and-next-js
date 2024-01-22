import { StudentsTable } from "../StudentsTable";
import TableBody from "../components/TableBody"
import TableHeader from "./TableHeader";
export const Table = () => {

  return (
    <div className="max-w-[848px] mx-auto overflow-hidden ">
      <table className="w-full">
        <TableHeader />

        {
          StudentsTable.map((student)=>(
              <TableBody key={student.clsName} student={student}/>
          ))
        }
      </table>
    </div>
  );
};
