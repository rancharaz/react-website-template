import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjForth, } from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjForth} />

        </>
    )
}
export default Home;