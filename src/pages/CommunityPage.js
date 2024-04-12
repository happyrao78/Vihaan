import React from 'react';
import CommunityHero from '../container/CommunityHero';
import CommunityBeliefs from '../container/CommunityBeliefs';
import CommunityConvers from '../container/CommunityConvers';
import CommunityMoto from '../container/CommunityMoto';

const CommunityPage = () => {
  return (
    <>
      <CommunityHero />
      <CommunityBeliefs />
      <CommunityConvers />
      <CommunityMoto />
    </>
  );
};

export default CommunityPage;
