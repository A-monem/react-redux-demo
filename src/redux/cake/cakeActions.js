import { BUY_CAKE } from './cakeTypes'


//action creator
export const buyCake = (payload = 1) => (
    {
        type: BUY_CAKE,
        payload
    }
) 