import { useState } from "react";

interface DepartmentItem {
  title: string;
  date?: string; 
  schedule: string;
}

interface Department {
  id: string;
  name: string;
  items: DepartmentItem[];
  hasDateColumn?: boolean; 
}

interface DepartmentCardProps {
  departments: Department[];
  bgColor?: string;
  textColor?: string;
  headerBgColor?: string;
}

const DepartmentCard = ({
  departments,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  headerBgColor = "bg-gray-100"
}: DepartmentCardProps) => {
  const [openDepartment, setOpenDepartment] = useState<string | null>(null);

  const toggleDepartment = (id: string) => {
    setOpenDepartment(openDepartment === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 ">
      {departments.map((dept) => (
        <div
          key={dept.id}
          className={`${bgColor} rounded-lg shadow-lg overflow-hidden transition-all`}
        >
          <button
            onClick={() => toggleDepartment(dept.id)}
            className={`w-full ${headerBgColor} p-6 flex items-center justify-between`}
          >
            <h3 className={`text-sm sm:text-xs md:text-2xl font-bold ${textColor}`}>
              {dept.name}
            </h3>
          </button>

          {openDepartment === dept.id && (
            <div className="p-6 space-y-4">
              {dept.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 "
                >
                  <h4 className={`text-base md:text-lg font-semibold ${textColor} flex-1`}>
                    {item.title}
                  </h4>
                  
                  {dept.hasDateColumn && item.date && (
                    <p className={`text-sm md:text-base ${textColor} flex-1 text-center`}>
                      {item.date}
                    </p>
                  )}
                  
                  <p className={`text-sm md:text-base ${textColor} flex-1 text-right`}>
                    {item.schedule}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentCard;