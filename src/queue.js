import Queue from './app/lib/queue';
import quantityMail from './app/jobs/quantityMail';
import 'dotenv/config';
Queue.process(quantityMail.handle);