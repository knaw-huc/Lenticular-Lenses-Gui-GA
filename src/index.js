import React from 'react';
import ReactDOM from 'react-dom';
import {StyleGuide, DescribedMock, Embed} from './component-view';

import { HcHeaderTimbuctoo} from './tim-emlo-faceted-search';
// import { HcLayoutFacetResults, HcLayoutEmplacesDetail } from './layouts';
// import { HcFacetBasic } from './facets';
// import { HcResultListHeader, HcResultList, HcResultListPaging } from './results';


ReactDOM.render(
<div>
    <StyleGuide>
      <DescribedMock title="Faceted Search">
        Timbuctoo and Emlo faceted search page components



          <Embed caption="Timbuctoo Header" description="">
            <HcHeaderTimbuctoo/>
          </Embed>



      </DescribedMock>

    </StyleGuide>

    </div>
    ,
  document.getElementById('container')
);
