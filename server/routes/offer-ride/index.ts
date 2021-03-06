import { Router, Request, Response } from 'express';
import db from '../../db';
// import {} from '../validators';

const route = Router();

route.post('/', async (req: Request, res: Response) => {
    try {
        const { rideFrom, rideTo, charge, maxPeople, date } = req.body;
        const response = await db(`
            INSERT INTO ManyCars.Offer_Ride (ride_from, ride_to, charge_value, max_people, date)
            VALUES ($1, $2, $3, $4, $5)
        `, [rideFrom, rideTo, charge, maxPeople, date]);
    
        console.log(response);
    
        res.status(201).send(response);
    } catch(err) {
        console.error(`This is the error: ${err}`);
        throw Error(err.message);
    }
});

export default route;