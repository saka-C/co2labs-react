// src/pages/Service.js
import { useParams } from 'react-router-dom';
import Swebdev from './Swebdev';
import Swebmain from './Swebmain';
import Sitsup from './Sitsup';
import S3party from './S3party';

const serviceComponents = {
  'web-main': Swebmain,
  'web-dev': Swebdev,
  'app-dev': Sitsup,
  'ai-solution': S3party,
};

function Service() {
  const { serviceId } = useParams();
  const ServiceComponent = serviceComponents[serviceId];

  return ServiceComponent ? <ServiceComponent /> : <div>Service not found</div>;
}

export default Service;
