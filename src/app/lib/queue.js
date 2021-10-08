import Queue from 'bull';
import quantityMail from '../jobs/quantityMail';
import redisConfig from '../../config/redis';

const mailQueue = new Queue(quantityMail.key, redisConfig);

export default mailQueue;