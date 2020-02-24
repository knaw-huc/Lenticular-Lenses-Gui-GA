import React from 'react';
import {HcLlListItemMinimal, HcLlListItemMinimal2Fields, HcLlListLabel, HcLlListItemDataSelection, HcLlListItemAlignment, HcResultListPaging} from './llListItems';
import {HcLlSubNavigation} from './llUtils';
import {HclLIconDataSelection} from './golden-agents';

export class HcLlLayoutHome extends React.Component {
  render() {
    return (<div className="hcContentContainer hcMarginBottom4 hcMarginTop5">
      <div className="hc2columns">

        {/* left column */}
        <div className="hcMarginBottom2 hcBasicSideMargin">
          <h2>
            New project
          </h2>
          Start a new project to reconcile one or more datasets.
          <br/>
          <br/>
          <button type="button" name="button">
            New project
          </button>
        </div>

        {/* right column */}
        <div className="hcBasicSideMargin hcMarginBottom4">
          <h2>Projects</h2>
          <div className="hcList hcMarginBottom4">
            {this.props.pageData.projectList.map(item => (<HcLlListItemMinimal title={item.prName}/>))}
          </div>
          <div className="hcStickOutBox hcRoundedCorners">
            <p className="hcMarginBottom1">
              Or enter your project ID:
            </p>
            <input type="text" name="name" defaultValue="defaultValue" className="hcMarginBottom1"/>
            <button type="button" name="button">
              Load project
            </button>
          </div>
        </div>
      </div>
    </div>);
  }
}






export class HcLlLayoutProjectDetail extends React.Component {
  render() {
    return (<div className="hcContentContainer hcMarginBottom4 hcMarginTop5">
      <div className="hc2columns">

        {/* left column */}
        <div className="hcMarginBottom2 hcBasicSideMargin hcForm">
          <h3>Project name</h3>
          Start a new project to reconcile one or more datasets.
          <input type="text" name="" value="" className="hcMarginBottom2"/>

          <h3>Project description</h3>
          Start a new project to reconcile one or more datasets.
          <textarea rows="4" className="hcMarginBottom1"></textarea>

          <button type="button">Save project</button>
        </div>

        {/* right column */}
        <div className="hcBasicSideMargin hcMarginBottom4"></div>
      </div>
    </div>);
  }
}







export class HcLlLayoutDataSelectionOverview extends React.Component {
  render() {
    return (<React.Fragment>
      <HcLlSubNavigation/>

      <div className="hcContentContainer hcMarginBottom2">
        <div className="hcRowJustify">
          <div className="hcBasicSideMargin">
            The data selection contains the selections of datasets you will work with.
            <br/>They can be entities with filters on them.
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
      <HcLlSubNavigation/>
      <div className="hcContentContainer hcMarginBottom3">
        <div className="hcRowJustify">
          <div className="hcBasicSideMargin">
            <h3><HclLIconDataSelection/>
              Marriages in 1600-1649</h3>
          </div>
        </div>
      </div>

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


  {/* Modal select dataset */}
  export class HcLlLayoutAlignmentOverview extends React.Component {
    render() {
      return (
        <React.Fragment>

          <HcLlSubNavigation/>

          <div className="hcContentContainer hcMarginBottom2">
            <div className="hcRowJustify">
              <div className="hcBasicSideMargin">
                Alignments
              </div>
              <div className="hcBasicSideMargin">
                <button type="button" name="button">
                  New aligment
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
              {this.props.pageData.alignmentList.map(item => (<HcLlListItemAlignment prName={item.prName} prSource={item.prSource} prTarget={item.prTarget}  prLinks={item.prLinks} prCusters={item.prCusters} prStatus={item.prStatus} />))}

            </div>
            {/* pagination */}
            <HcResultListPaging/>
          </div>


      </ React.Fragment>);
    }
  }
