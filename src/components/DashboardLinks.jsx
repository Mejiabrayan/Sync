import React from 'react';
import { BsGrid } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { IoStatsChartOutline, IoExitOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';

function DashboardLink({ icon, text, href }) {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center">
        {icon}
        <a href={href} className="text-gray-500 hover:text-gray-700">
          {text}
        </a>
      </div>
    </div>
  );
}

function DashboardLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DashboardLink icon={<BsGrid className="text-xl mr-2" />} text="Feed" href="#" />
      <DashboardLink icon={<BiSearch className="text-xl mr-2" />} text="Explore" href="#" />
      <DashboardLink icon={<IoStatsChartOutline className="text-xl mr-2" />} text="Stats" href="#" />
      <DashboardLink icon={<GoMail className="text-xl mr-2" />} text="Messages" href="#" />
      <DashboardLink icon={<IoExitOutline className="text-xl mr-2" />} text="Login" href="/login" />
    </div>
  );
}

export default DashboardLinks;
