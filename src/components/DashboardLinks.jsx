import React from 'react';
import { BsGrid } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { IoStatsChartOutline, IoExitOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';

function DashboardLink({ icon, text, href }) {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center gap-2">
        {icon}
        <a href={href} className="text-gray-700 hover:text-purple-500">
          {text}
        </a>
      </div>
    </div>
  );
}

function DashboardLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DashboardLink icon={<BsGrid className="text-xl" />} text="Feed" href="#" />
      <DashboardLink icon={<BiSearch className="text-xl" />} text="Explore" href="#" />
      <DashboardLink icon={<IoStatsChartOutline className="text-xl" />} text="Stats" href="#" />
      <DashboardLink icon={<GoMail className="text-xl" />} text="Messages" href="#" />
      <DashboardLink icon={<IoSettingsOutline className="text-xl" />} text="Settings" href="#" />
      <DashboardLink icon={<IoExitOutline className="text-xl" />} text="Logout" href="/logout" />
    </div>
  );
}

export default DashboardLinks;
