import React from 'react';
import ReactDOM from 'react-dom';

import {StyleGuide, DescribedMock, Embed} from './component-view';
import { HcHeaderGoldenAgents } from './golden-agents';
import { HcLlLayoutHome, HcLlLayoutProjectDetail, HcLlLayoutDataselectionOverview, HcLlDataSelectionDetail} from './llPages';





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
    <HcLlLayoutDataselectionOverview/>

    Data selection Detail
    <HcHeaderGoldenAgents toolName="Lenticular Lenses" projectName="Project Y"/>
    <HcLlDataSelectionDetail/>


    </div>
    ,
  document.getElementById('container')
);
