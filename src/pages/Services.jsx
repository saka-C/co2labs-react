// src/pages/Service.js
import { useParams } from 'react-router-dom';
import Swebdev from './Swebdev';
import Swebmain from './Swebmain';
import Sitsup from './Sitsup';
import S3party from './S3party';
import Notfound from './Notfound';

const serviceComponents = {
  'web-main': Swebmain,
  'web-dev': Swebdev,
  'it-support': Sitsup,
  'ai-solution': S3party,
};

function Service() {
  const { serviceId } = useParams();
  const ServiceComponent = serviceComponents[serviceId];

  return ServiceComponent ? <ServiceComponent /> : <Notfound />;
}

export default Service;
