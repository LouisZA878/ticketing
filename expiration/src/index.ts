import { natsWrapper } from './nats-wrapper'
import { OrderCreatedListener } from './events/order-created-listener'
 
const start = async () => {
    if(!process.env.NATS_CLIENT_ID){
      throw new Error('must supply a NATS_CLIENT_ID env')
    }
    if(!process.env.NATS_CLUSTER_ID){
      throw new Error('must supply a NATS_CLSUTER_ID env')
    }
    if(!process.env.NATS_URL){
      throw new Error('must supply a NATS_URL env')
    }

  try {
    await natsWrapper.connect(
          process.env.NATS_CLUSTER_ID,
          process.env.NATS_CLIENT_ID,
          process.env.NATS_URL
          );
      natsWrapper.client.on('close', () => {
        console.log('NATS connection closed!')
        process.exit()
        })
      process.on('SIGINT', () => natsWrapper.client.close())
      process.on('SIGTERM', () => natsWrapper.client.close())
          
    new OrderCreatedListener(natsWrapper.client).listen()
  } catch (err) {
    console.error(err);
  }

  
};

start();