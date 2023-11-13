import React , { useState, useEffect } from 'react';
import Header from '../components/bedManagement/Header';
import Details from '../components/bedManagement/Details';
import { db } from '../firebase';
import AdmissionMaster from '../components/bedManagement/AdmissionMaster';
import BedList from '../components/bedManagement/BedList';
import './ComprehensiveWardManagementPage.css'
import Home from './Home';
import AdmitPage from './AdmitPage';

function ComprehensiveWardManagementPage() {
    const [currentView, setCurrentView] = useState('home'); // This state holds the current view
    const [wards,setWards] = useState([])
    const [selectedWard, setSelectWard] = useState("General Ward")
    const [bedDetails, setBedDetails] = useState(null);

    useEffect(() => {
        const fetchWards = async () => {
          try {
            const response = await db.collection('wards').get();
            const wardsData = {};
            response.forEach(doc => {
              wardsData[doc.id] = doc.data();
            });
            setWards(wardsData);
          } catch (error) {
            console.error("Error fetching wards", error);
          }
        };

        fetchWards();
    }, []);


    const handleWardClick = (ward) => {
        setSelectWard(ward);
        // TODO: Fetch the bed details for the selected ward
        // setBedDetails(fetchedDetails);
    }

    const handleNavigate = (destination) => {
        // Handle navigation logic here
        setCurrentView(destination); // Update the current view based on the destination clicked
    };
    // Conditionally render components based on the current view
  let content;
  switch (currentView) {
    case 'home':
      content = <Home />; // Component for the home view
      break;
    case 'admit':
      content = <AdmitPage />; // Component for the admit view
      break;
    case 'bedManagement':
      content = (
        <>
          <AdmissionMaster onWardClick={handleWardClick} selectedWard={selectedWard} />
          <Details bedDetails={bedDetails} />
          {/* Include other components related to bed management here */}
        </>
      );
      break;
    // ... handle other destinations
    default:
      content = <Home />; // Default to home view if destination is not recognized
  }

    return (
        <div>
            <Header onNavigate={handleNavigate} />
            <div className="main-content">
            <div className="left-panel">
            <Details bedDetails={bedDetails} />
            {/* ... Include any other components that should appear on the left */}
            </div>
            <div className="right-panel">
          <AdmissionMaster onWardClick={handleWardClick} selectedWard={selectedWard} />
          {/* ... Include any other components that should appear on the right */}
            <BedList selectedWard={selectedWard} wardData={wards} />
            </div>
        </div>
    </div>
    );
}

export default ComprehensiveWardManagementPage;
