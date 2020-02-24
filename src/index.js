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

    </DescribedMock>

  </StyleGuide>

  Homepage
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlLayoutHome pageData={data.pages[0]}/>

  Project detail page
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlLayoutProjectDetail/>

  Data selection List
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlLayoutDataSelectionOverview pageData={data.pages[1]}/>

  Data selection Detail
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlDataSelectionDetail />



{/* Modal select dataset
  Dataset browser modal page
  <HcModal modalName="Dataset browser">
    <HcLlSelectDataset pageData={data.pages[2]} />
  </HcModal>
  */}


  Alignment list
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlLayoutAlignmentOverview pageData={data.pages[3]}/>


  Alignment detail
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlAlignmentDetail pageData={data.pages[4]}/>

  Alignment Link Compare
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlAlignmentsLinkCompare pageData={data.pages[5]}/>

  Alignment Cluster view
  <HcHeaderGoldenAgents toolName={data.toolName} projectName={data.projectName}/>
  <HcLlAlignmentsClusterView pageData={data.pages[6]}/>


</div>, document.getElementById('container'));
