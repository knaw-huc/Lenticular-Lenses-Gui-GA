import React from 'react';
import ReactDOM from 'react-dom';

import {StyleGuide, DescribedMock, Embed} from './component-view';
import { HcHeaderGoldenAgents } from './golden-agents';
import { HcLlLayoutHome, HcLlLayoutProjectDetail, HcLlLayoutDataselectionList} from './llPages';



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

    Data selection List
    <HcHeaderGoldenAgents toolName="Lenticular Lenses" projectName="Project Y"/>
    <HcLlLayoutDataselectionList/>


    </div>
    ,
  document.getElementById('container')
);
