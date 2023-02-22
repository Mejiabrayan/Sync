import React from 'react';
import { FaHome, FaCompass, FaEnvelope } from 'react-icons/fa';
import { GrLinkNext } from 'react-icons/gr';
import {CiMail} from 'react-icons/ci';

function DashboardLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <FaHome className="text-xl w-6 h-6 mr-2" />
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Feed
          </a>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <FaCompass className="text-xl w-6 h-6 mr-2" />
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Explore
          </a>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <CiMail className="text-xl w-6 h-6 mr-2" />
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Messages
          </a>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <GrLinkNext className="text-xl w-6 h-6 mr-2" />
          <a href="/login" className="text-gray-500 hover:text-gray-700">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default DashboardLinks;
