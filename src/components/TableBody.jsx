export default function TableBody({ studentsData }) {
  const {clsName,students}=studentsData
  return (
    <tbody>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {clsName}
        </td>
      </tr>
      {students.map((student) => (
        <tr key={student.id} className="border-b border-[#7ECEB529]">
          <td className="p-5 text-sm md:text-xl">{student.id}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img
                className="w-8 h-8"
                src="./assets/avatar.png"
                width="32"
                height="32"
                
              />
              <span className="whitespace-nowrap">{student.name}</span>
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">{student.score}</td>
          <td className="p-5 text-sm md:text-xl text-center">{student.percentage}</td>
        </tr>
      ))}
    </tbody>
  );
}
