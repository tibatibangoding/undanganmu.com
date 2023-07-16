import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';

const ContainerHome: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main>halo</main>
    </>
  );
};

export default ContainerHome;
