import React from 'react';
import ReactDOM from 'react-dom';
import {StyleGuide, DescribedMock, Embed} from './component-view';

import { HcHeaderGoldenAgents } from './golden-agents';
// import { HcLayoutFacetResults, HcLayoutEmplacesDetail } from './layouts';
// import { HcFacetBasic } from './facets';
// import { HcResultListHeader, HcResultList, HcResultListPaging } from './results';


ReactDOM.render(
<div>
    <StyleGuide>
      <DescribedMock title="Home">

          <Embed caption="Timbuctoo Header" description="">
            <HcHeaderGoldenAgents toolName="Lenticular Lenses" projectName="Project Y"/>
          </Embed>

      </DescribedMock>


    </StyleGuide>

    </div>
    ,
  document.getElementById('container')
);
