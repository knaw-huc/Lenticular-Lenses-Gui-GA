import React from 'react';
import ReactDOM from 'react-dom';

import {StyleGuide, DescribedMock, Embed} from './component-view';
import {HcHeaderGoldenAgents} from './golden-agents';
import {HcLlLayoutHome, HcLlLayoutProjectDetail} from './llPages-General';
import {HcLlLayoutDataSelectionOverview, HcLlDataSelectionDetail, HcLlSelectDataset} from './llPages-DataSelection';
import {HcLlLayoutAlignmentOverview, HcLlAlignmentDetail, HcLlAlignmentsLinkCompare, HcLlAlignmentsClusterView} from './llPages-Alignments';
import {HcModal} from './llUtils';

import data from './tempData';

ReactDOM.render(<div>
  <StyleGuide>
    <DescribedMock title="Home">
      <Embed caption="Timbuctoo Header" description="">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
      </Embed>

      <Embed caption="Homepage" description="" fullscreen="small">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlLayoutHome pageData={data.pages[0]}/>
      </Embed>

      <Embed caption="Project detail page" fullscreen="small">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlLayoutProjectDetail/>
      </Embed>

      {/*
        Dataset browser modal page
        */}

      <Embed caption="Data selection List" fullscreen="small">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlLayoutDataSelectionOverview pageData={data.pages[1]}/>
      </Embed>

      <Embed caption="Data selection Detail" fullscreen="small">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlDataSelectionDetail  pageData={data.pages[7]}/>
      </Embed>


      <Embed caption="Modal select dataset" fullscreen="mall">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlDataSelectionDetail  pageData={data.pages[7]}/>
        <HcModal modalName="Dataset browser">
          <HcLlSelectDataset pageData={data.pages[2]} />
        </HcModal>
      </Embed>

      <Embed caption="Alignment list" fullscreen="small">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlLayoutAlignmentOverview pageData={data.pages[3]}/>
      </Embed>

      <Embed caption="Alignment detail" fullscreen="BIG">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlAlignmentDetail pageData={data.pages[4]}/>
      </Embed>

      <Embed caption="Alignment Link Compare" fullscreen="small">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlAlignmentsLinkCompare pageData={data.pages[5]}/>
      </Embed>

      <Embed caption="Alignment Cluster view" fullscreen="small">
        <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
        <HcLlAlignmentsClusterView pageData={data.pages[6]}/>
      </Embed>

    </DescribedMock>
  </StyleGuide>






</div>, document.getElementById('container'));
