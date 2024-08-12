import { useLocation } from 'react-router-dom';
import Maintenance from './Maintenance';

// eslint-disable-next-line react/prop-types
const RouteGuard = ({ element, maintenancePages }) => {
  const location = useLocation();
  // eslint-disable-next-line react/prop-types
  const isMaintenance = maintenancePages.includes(location.pathname);

  if (isMaintenance) {
    return <Maintenance />;
  }


  console.log('Current path:', location.pathname);


  return element;


};

export default RouteGuard;