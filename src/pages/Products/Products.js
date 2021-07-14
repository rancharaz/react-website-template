import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Pricing />
        </>
    )
}
export default Home;