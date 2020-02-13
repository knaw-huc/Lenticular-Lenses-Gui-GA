import React from 'react';
import ReactDOM from 'react-dom';
import {StyleGuide, DescribedMock, Embed} from './component-view';

import { HcHeaderGoldenAgents } from './golden-agents';
 import { HcLlLayoutHome, HcLlLayoutProjectDetail, HcLlLayoutTabs} from './llLayouts';
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

    Homepage
    <HcHeaderGoldenAgents toolName="Lenticular Lenses" projectName="Project Y"/>
    <HcLlLayoutHome/>

    Project detail page
    <HcHeaderGoldenAgents toolName="Lenticular Lenses" projectName="Project Y"/>
    <HcLlLayoutProjectDetail/>

    Data selection Homepage
    <HcLlLayoutTabs/>

    </div>
    ,
  document.getElementById('container')
);
