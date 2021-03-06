import React from 'react';
import {HcLlListItemMinimal, HcLlListItemMinimal2Fields, HcLlListLabel, HcLlListItemDataSelection, HcLlListItemAlignment, HcResultListPaging,HcLlListItemAlignmentLinks, HcLlListItemAlignmentClusters} from './llListItems';
import {HcLlSubNavigation} from './llUtils';
import {HclLIconDataSelection, HclLIconAlignment} from './golden-agents';








export class HcLlLayoutDataSelectionOverview extends React.Component {
  render() {
    return (<React.Fragment>
      <HcLlSubNavigation pageTitle={this.props.pageData.pageTitle} isDs={this.props.pageData.pageNavDs} isAl={this.props.pageData.pageNavAl} />

      <div className="hcContentContainer hcMarginBottom2">
        <div className="hcRowJustify">
          <div className="hcBasicSideMargin">
            {this.props.pageData.introductionText}
          </div>
          <div className="hcBasicSideMargin">
            <button type="button" name="button">
              New data selection
            </button>
          </div>
        </div>
      </div>

      <div className="hcContentContainer hcMarginBottom5">
        <div className="hcResultsHeader hcMarginBottom1 hcBasicSideMargin">
          <div>
            {/* labels */}
            <HcLlListLabel title="Data selections"/>
          </div>

          <div>
            <select className="" name="">
              <option value="">Order by name</option>
              <option value="">Order by date updated</option>
              <option value="">Order by date create</option>
            </select>
          </div>
        </div>

        <div className="hcList hcListDisctinctLines hcBasicSideMargin hcMarginBottom2">
          {/* results */}
          {this.props.pageData.dsList.map(item => (<HcLlListItemDataSelection title={item.dsName} dataset={item.dsDataset} provider={item.dsProvider}/>))}

        </div>
        {/* pagination */}
        <HcResultListPaging/>
      </div>
    </ React.Fragment>);
  }
}







export class HcLlDataSelectionDetail extends React.Component {
  render() {
    return (<React.Fragment>
      <HcLlSubNavigation pageTitle={this.props.pageData.pageTitle} isDs={this.props.pageData.pageNavDs} isAl={this.props.pageData.pageNavAl} />


      <div className="hcContentContainer hcMarginBottom5">
        <div className="hcTabs hcTabsHoriz hcBasicSideMargin">
          <div className="hcTabLabels">
            <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-info">Info</div>
            <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-dataset">Dataset</div>
            <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-filter">Filter</div>
            <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-sample">Sample</div>
            <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-relation">Relation</div>
          </div>
          <div className="hcTabAllContent hcStickOutBoxAside hcRoundedCornersTop">

            {/* tab: info */}
            <div className="hcTabContent hcMarginTop2 hcForm" id="tab-content-info">
              <h3>Name</h3>
              <input type="text" name="name" defaultValue="defaultValue" className="hcMarginBottom2"/>
              <h3>Description</h3>
              <textarea name="name" rows={4} className="hcMarginBottom1"/>
              <button type="button" name="button">
                Save project
              </button>
            </div>

            {/* tab: Dataset and entity */}
            <div className="hcTabContent hcMarginTop2" id="tab-content-dataset">
              <h3>Dataset and entity</h3>
              <div>
                <div className="hc2columns hcMarginBottom2">
                  <div>
                    <div className="hcLabel">dataset</div>
                    Enriched version of the Index op ondertrouwregisters
                    <div className="hcSmallTxt hcClrTxt_Grey">
                      Enriched version of the Index op ondertrouwregisters. Enrichment by Golden Agents.
                    </div>
                  </div>
                  <div>
                    <div className="hcLabel">entity</div>
                    saa_Person
                  </div>
                </div>
                <button type="button" name="button">
                  Select data </button>
                </div>

              </div>

              {/* tab: Filter */}
              <div className="hcTabContent hcMarginTop2 hcForm" id="tab-content-filter">
                <h3>Filter</h3>


              </div>

              {/* tab: Sample */}
              <div className="hcTabContent hcMarginTop2" id="tab-content-sample">
                <h3>Sample</h3>
                <div className="hc2columns">
                  <div>Only use a sample of this amount of records (-1 is no limit) </div>
                  <div><input type="number" value="-1" /> </div>
                </div>
              </div>

              {/* tab: Relation */}
              <div className="hcTabContent hcMarginTop2" id="tab-content-relation">
                <h3>Relation</h3>
              </div>

            </div>
          </div>
        </div>
      </ React.Fragment>
      );
    }
  }




  {/* Modal select dataset */}
  export class HcLlSelectDataset extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className=" hc2columns">
                  <div className="hcList hcMarginBottom4 hcBasicSideMargin hcMaxhalf">
                    {this.props.pageData.datasetList.map(item => (<HcLlListItemMinimal2Fields field1={item.field1} field2={item.field2} />))}

                  </div>
                  <div className="hcBasicSideMargin hcClrBg_Grey05 hcleftMark">
                    <div className="hcMarginTop2">
                       <strong>
                         {this.props.pageData.detailInfoName}
                      </strong>
                      </div>
                      <div className="hcSmallTxt hcClrTxt_Grey">
                        {this.props.pageData.detailInfoProvider}
                      </div>
                      <div className="hcSmallTxt hcClrTxt_Grey hcMarginBottom1">
                        {this.props.pageData.detailInfodescription}
                      </div>
                    <div className="hcLabel">Entity</div>
                    <div className="hcList ">
                      {this.props.pageData.detailInfoEntities.map(item => (<HcLlListItemMinimal2Fields field1={item.field1} />))}
                    </div>
                  </div>
                </div>


      </ React.Fragment>);
    }
  }
