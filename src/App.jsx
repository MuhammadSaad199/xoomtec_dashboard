import { useState } from 'react';
import './App.css';

// Data
const employees =
  [
    { "id": 1, "name": "John Doe", "department": "HR", "netSalary": 5000, "salaryBreakdown": { "basic": 3000, "hra": 1500, "bonus": 500 } },
    { "id": 2, "name": "Jane Smith", "department": "DevOps", "netSalary": 6000, "salaryBreakdown": { "basic": 3500, "hra": 2000, "bonus": 500 } },
    { "id": 3, "name": "Bob Johnson", "department": "Sales", "netSalary": 7000, "salaryBreakdown": { "basic": 4000, "hra": 2500, "bonus": 500 } },
    { "id": 4, "name": "Alice Brown", "department": "Marketing", "netSalary": 5500, "salaryBreakdown": { "basic": 3200, "hra": 1800, "bonus": 500 } },
    { "id": 5, "name": "Charlie Davis", "department": "HR", "netSalary": 5200, "salaryBreakdown": { "basic": 3100, "hra": 1600, "bonus": 500 } },
    { "id": 6, "name": "Emily Wilson", "department": "DevOps", "netSalary": 6200, "salaryBreakdown": { "basic": 3700, "hra": 2000, "bonus": 500 } },
    { "id": 7, "name": "Frank Moore", "department": "Sales", "netSalary": 7100, "salaryBreakdown": { "basic": 4200, "hra": 2400, "bonus": 500 } },
    { "id": 8, "name": "Grace Taylor", "department": "Marketing", "netSalary": 5300, "salaryBreakdown": { "basic": 3000, "hra": 1800, "bonus": 500 } },
    { "id": 9, "name": "Henry Lee", "department": "HR", "netSalary": 5100, "salaryBreakdown": { "basic": 3100, "hra": 1400, "bonus": 600 } },
    { "id": 10, "name": "Ivy Walker", "department": "DevOps", "netSalary": 5900, "salaryBreakdown": { "basic": 3400, "hra": 2000, "bonus": 500 } },
    { "id": 11, "name": "Jack Harris", "department": "Sales", "netSalary": 6800, "salaryBreakdown": { "basic": 3900, "hra": 2400, "bonus": 500 } },
    { "id": 12, "name": "Kelly Young", "department": "Marketing", "netSalary": 5600, "salaryBreakdown": { "basic": 3200, "hra": 1900, "bonus": 500 } },
    { "id": 13, "name": "Liam Scott", "department": "HR", "netSalary": 5300, "salaryBreakdown": { "basic": 3200, "hra": 1600, "bonus": 500 } },
    { "id": 14, "name": "Mia Green", "department": "DevOps", "netSalary": 6200, "salaryBreakdown": { "basic": 3700, "hra": 2000, "bonus": 500 } },
    { "id": 15, "name": "Noah Hall", "department": "Sales", "netSalary": 7200, "salaryBreakdown": { "basic": 4300, "hra": 2400, "bonus": 500 } },
    { "id": 16, "name": "Olivia Adams", "department": "Marketing", "netSalary": 5600, "salaryBreakdown": { "basic": 3200, "hra": 1900, "bonus": 500 } },
    { "id": 17, "name": "Paul White", "department": "HR", "netSalary": 5100, "salaryBreakdown": { "basic": 3100, "hra": 1400, "bonus": 600 } },
    { "id": 18, "name": "Quinn Carter", "department": "DevOps", "netSalary": 6000, "salaryBreakdown": { "basic": 3500, "hra": 1900, "bonus": 600 } },
    { "id": 19, "name": "Ruby Nelson", "department": "Sales", "netSalary": 6900, "salaryBreakdown": { "basic": 4000, "hra": 2400, "bonus": 500 } },
    { "id": 20, "name": "Sam Wright", "department": "Marketing", "netSalary": 5400, "salaryBreakdown": { "basic": 3000, "hra": 1800, "bonus": 600 } },
    { "id": 21, "name": "Tina Hill", "department": "HR", "netSalary": 5200, "salaryBreakdown": { "basic": 3100, "hra": 1500, "bonus": 600 } },
    { "id": 22, "name": "Umar King", "department": "DevOps", "netSalary": 6100, "salaryBreakdown": { "basic": 3600, "hra": 2000, "bonus": 500 } },
    { "id": 23, "name": "Vera Martin", "department": "Sales", "netSalary": 7100, "salaryBreakdown": { "basic": 4200, "hra": 2400, "bonus": 500 } },
    { "id": 24, "name": "Will Baker", "department": "Marketing", "netSalary": 5500, "salaryBreakdown": { "basic": 3200, "hra": 1900, "bonus": 400 } },
    { "id": 25, "name": "Xena Lopez", "department": "HR", "netSalary": 5200, "salaryBreakdown": { "basic": 3100, "hra": 1500, "bonus": 600 } },
    { "id": 26, "name": "Yusuf Reed", "department": "DevOps", "netSalary": 6200, "salaryBreakdown": { "basic": 3700, "hra": 2000, "bonus": 500 } },
    { "id": 27, "name": "Zara Ward", "department": "Sales", "netSalary": 6900, "salaryBreakdown": { "basic": 4000, "hra": 2400, "bonus": 500 } },
    { "id": 28, "name": "Amber Gray", "department": "Marketing", "netSalary": 5600, "salaryBreakdown": { "basic": 3200, "hra": 1900, "bonus": 500 } },
    { "id": 29, "name": "Benjamin Fox", "department": "HR", "netSalary": 5100, "salaryBreakdown": { "basic": 3000, "hra": 1400, "bonus": 700 } },
    { "id": 30, "name": "Catherine Shaw", "department": "DevOps", "netSalary": 6000, "salaryBreakdown": { "basic": 3500, "hra": 2000, "bonus": 500 } },
    { "id": 31, "name": "Daniel Brown", "department": "Sales", "netSalary": 7101, "salaryBreakdown": { "basic": 4200, "hra": 2400, "bonus": 500 } },
    { "id": 32, "name": "Emma Davis", "department": "Marketing", "netSalary": 5600, "salaryBreakdown": { "basic": 3200, "hra": 1900, "bonus": 500 } },
    { "id": 33, "name": "Fiona Lee", "department": "HR", "netSalary": 5200, "salaryBreakdown": { "basic": 3100, "hra": 1500, "bonus": 600 } },
    { "id": 34, "name": "George Carter", "department": "DevOps", "netSalary": 6100, "salaryBreakdown": { "basic": 3600, "hra": 2000, "bonus": 500 } },
    { "id": 35, "name": "Hannah Walker", "department": "Sales", "netSalary": 7000, "salaryBreakdown": { "basic": 4000, "hra": 2500, "bonus": 500 } },
    { "id": 36, "name": "Isla Harris", "department": "Marketing", "netSalary": 5400, "salaryBreakdown": { "basic": 3000, "hra": 1800, "bonus": 600 } },
    { "id": 37, "name": "Jackie Young", "department": "HR", "netSalary": 5300, "salaryBreakdown": { "basic": 3200, "hra": 1600, "bonus": 500 } },
    { "id": 38, "name": "Kevin Martin", "department": "DevOps", "netSalary": 6200, "salaryBreakdown": { "basic": 3700, "hra": 2000, "bonus": 500 } },
    { "id": 39, "name": "Laura Reed", "department": "Sales", "netSalary": 7200, "salaryBreakdown": { "basic": 4300, "hra": 2400, "bonus": 500 } },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10
  const [isMenuOpen] = useState(true);

  // Filtered employees based on search and department
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

    // pagination
    const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + rowsPerPage);
  
    const handlePageChange = (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    };

  return (
    
<div className="flex justify-between mx-auto w-full min-h-screen">
<div className="lg:w-1/5 hidden md:block">
  <div className="flex justify-between items-center p-4 text-white ">
  <img src="/logo.png" alt="Logo" className="h-8" />
<button
      className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
    >
    </button>
  </div>

  {/* Menu content */}
  <div
    className={`${
      isMenuOpen ? "block" : "hidden"
    } lg:block py-4 overflow-y-auto bg-white`}
  >
    <ul className="space-y-2 font-medium">
      <li>
        <a href="#" className="flex items-center p-2 text-black">
          <span className="ms-3">Employee Details</span>
        </a>
      </li>
      <li>
        <a className="flex items-center p-2 text-[#4a5470]">
          <span className="ms-3">Report</span>
        </a>
      </li>
      <li>
        <a className="flex items-center p-2 text-[#4a5470]">
          <span className="ms-3">Profile Details</span>
        </a>
      </li>
    </ul>
  </div>
</div>

<div className='bg-[#EAEAEA] md:w-4/5 mx-auto'>
        {/* Navbar */}
        <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between md:justify-end items-center px-4">
    <img src="/logo.png" alt="Logo" className="md:hidden block" />

          <button className="bg-white border text-black px-4 py-2 rounded-md hover:bg-[#9ACB3B] hover:text-white transition">
            Logout
          </button>
        </div>
      </nav>
    <div className="container p-4">
      <div className='flex md:flex-row flex-col justify-between mb-10'>
      <h1 className="md:text-2xl text-xl text-[#343A40] font-bold mb-4">Employee Details</h1>
      <div className=' flex space-x-4'>
        {/* first card */}
        <section className='flex md:flex-row flex-col md:gap-4 gap-2 items-center p-5 max-w-[243px] bg-white'>
  <img src="/groupUser.png" alt="image" className='block md:hidden'/>
  <div>
    <h5 className='font-medium md:text-base text-sm text-[#343B4F]'>Total Employees</h5>
    <p className='text-[#6C757D] text-sm md:text-left'>{employees.length}</p>
  </div>
</section>
                {/* second card */}
                <section className='flex md:flex-row flex-col md:gap-4 gap-2 items-center p-5 max-w-[243px] bg-white'>
  <img src="/groupUser.png" alt="image" className='w-8 h-8'/>
  <div>
    <h5 className='font-medium md:text-base text-sm text-[#343B4F]'>Total Salary</h5>
    <p className='text-[#6C757D] text-sm md:text-left'>
      ${employees.reduce((total, emp) => total + emp.netSalary, 0).toLocaleString()}
    </p>
  </div>
</section>

      </div>
      </div>
      {/* Search Bar and Filter Dropdown */}
      <div className="flex md:flex-row flex-col justify-between border gap-4 mb-4">
<div className='flex'>
<input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
                <img src="/search.png" alt="image" className='bg-[#9ACB3B]  p-2 rounded-md' />
</div>


<div className='flex items-center gap-x-4 w-full md:justify-end'> 
  <p className='font-bold text-sm md:block hidden'>Departments</p>
<select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option className='text-[#6C757D] md:text-sm text-xs' value="All">Select Departments</option>
          <option value="HR">HR</option>
          <option value="DevOps">DevOps</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
        </select>
</div>
      </div>

      {/* Employee Table */}
      <table className="table-auto w-full border-collapse border border-gray-200 text-[#343A40] md:text-sm text-xs bg-white">
        <thead>
          <tr className="bg-[#9ACB3B] text-white md:text-base text-sm">
            <th className=" md:px-4 px-2 py-2">Employee ID</th>
            <th className=" md:px-4 px-2 py-2">Name</th>
            <th className=" md:px-4 px-2 py-2">Department</th>
            <th className=" md:px-4 px-2 py-2">Net Salary</th>
          </tr>
        </thead>
    <tbody>
              {paginatedEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  onClick={() => setModalData(employee)}
                  className="hover:bg-gray-50 text-center cursor-pointer"
                >
                  <td className="border-b-2 border-gray-200 md:px-4 px-2 py-2">{employee.id}</td>
                  <td className="border-b-2 border-gray-200 md:px-4 px-2 py-2">{employee.name}</td>
                  <td className="border-b-2 border-gray-200 md:px-4 px-2 py-2 text-[#6C757D]">{employee.department}</td>
                  <td className="border-b-2 border-gray-200 md:px-4 px-2 py-2">${employee.netSalary}</td>
                </tr>
              ))}
            </tbody>
      </table>

       {/* Pagination */}
       <div className="flex justify-end mt-4">
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    className={`px-4 py-2 mx-2 rounded ${
      currentPage === 1
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-[#9ACB3B] text-white hover:bg-[#83ac31]"
    }`}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  <button
    onClick={() => handlePageChange(currentPage + 1)}
    className={`px-4 py-2 mx-2 rounded ${
      currentPage === totalPages
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-[#9ACB3B] text-white hover:bg-[#83ac31]"
    }`}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>


      {/* Modal */}
      {modalData && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg w-[400px] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center text-white text-xl font-bold">
            <img src="/profile.png" alt="image" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-[#343B4F]">{modalData.name}</h3>
            <p className="text-sm text-gray-500">{modalData.department}</p>
          </div>
        </div>
        <button
          onClick={() => setModalData(null)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
      </div>
      <div>
        <div className="bg-[#9ACB3B] text-white font-semibold rounded-t-md">
          <div className="flex justify-between p-2">
            <span>Salary Breakdown</span>
            <span>Amount</span>
          </div>
        </div>
        <div className="border rounded-b-md">
          <div className="flex justify-between p-2 border-b">
            <span>Basic</span>
            <span>${modalData.salaryBreakdown.basic}</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span>HRA</span>
            <span>${modalData.salaryBreakdown.hra}</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Bonus</span>
            <span>${modalData.salaryBreakdown.bonus}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
</div>
</div>
  );
}

export default App;