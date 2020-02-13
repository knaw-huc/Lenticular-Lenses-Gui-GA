import React from 'react';
import { HcLlListItemMinimal, HcLlListLabel, HcLlListItemDataSelection,HcResultListPaging } from './llListItems';
import { HcLlSubNavigation } from './llUtils';
import { HclLIconDataSelection } from './golden-agents';
//const Fragment = React.Fragment;


  export class HcLlLayoutHome extends React.Component {
    render() {
      return (
        <div className="hcContentContainer hcMarginBottom4 hcMarginTop5">
          <div className="hc2columns">


            {/* left column */}
            <div className="hcMarginBottom2 hcBasicSideMargin">
              <h2>
                New project
              </h2>
              Start a new project to reconcile one or more datasets. <br />
              <br />
              <button type="button" name="button">
                New project
              </button>
            </div>


            {/* right column */}
            <div className="hcBasicSideMargin hcMarginBottom4">
              <h2>Projects</h2>
              <div className="hcList hcMarginBottom4">
                <HcLlListItemMinimal title="Project 1"/>
                <HcLlListItemMinimal title="Project 2"/>
              </div>
              <div className="hcStickOutBox hcRoundedCorners">
                <p className="hcMarginBottom1">
                  Or enter your project ID:
                </p>
                <input
                  type="text"
                  name
                  defaultValue
                  className="hcMarginBottom1" />
                <button type="button" name="button">
                  Load project
                </button>
              </div>
            </div>
          </div>
        </div>

        );
      }
    }


    export class HcLlLayoutProjectDetail extends React.Component {
      render() {
        return (
          <div className="hcContentContainer hcMarginBottom4 hcMarginTop5">
            <div className="hc2columns">

              {/* left column */}
              <div className="hcMarginBottom2 hcBasicSideMargin hcForm">
                 <h3>Project name</h3>
                 Start a new project to reconcile one or more datasets.
                 <input type="text" name="" value="" className="hcMarginBottom2" />

                 <h3>Project description</h3>
                 Start a new project to reconcile one or more datasets.
                 <textarea rows="4" className="hcMarginBottom1"></textarea>

                 <button type="button" >Save project</button>
              </div>

              {/* right column */}
              <div className="hcBasicSideMargin hcMarginBottom4">

              </div>
            </div>
          </div>
          );
        }
      }



      export class HcLlLayoutDataselectionOverview extends React.Component {
        render() {
          return (
              <React.Fragment>
                <HcLlSubNavigation/>

                <div className="hcContentContainer hcMarginBottom2">
                  <div className="hcRowJustify">
                      <div className="hcBasicSideMargin">
                          The data selection contains the selections of datasets you will work with. <br />They can be entities with filters on them.
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
                        <HcLlListLabel  title="Data selections" />
                      </div>

                      <div><select className="" name="">
                        <option value="">Order by name</option>
                        <option value="">Order by date updated</option>
                        <option value="">Order by date create</option>
                      </select></div>
                    </div>

                    <div className="hcList hcListDisctinctLines hcBasicSideMargin hcMarginBottom2">
                      {/* results */}
                      <HcLlListItemDataSelection title="Marriages in 1600-1649"  dataset="Index op notarieel archief" provider="Stadsarchief Amsterdam"/>
                      <HcLlListItemDataSelection title="Marriages in the 17th Century" dataset="Index op notarieel archief" provider="Stadsarchief Amsterdam"/>
                      <HcLlListItemDataSelection title=" Marriages in the 18th Century" dataset="Index op notarieel archief" provider="Stadsarchief Amsterdam"/>

                    </div>
                    {/* pagination */}
                    <HcResultListPaging/>
                </div>
            </ React.Fragment>

            );
          }
        }



        export class HcLlDataSelectionDetail extends React.Component {
          render() {
            return (
              <React.Fragment>
              <HcLlSubNavigation/>
              <div className="hcContentContainer hcMarginBottom3">
                  <div className="hcRowJustify">
                    <div className="hcBasicSideMargin">
                      <h3><HclLIconDataSelection/> Marriages in 1600-1649</h3>
                  </div>
                </div>
              </div>

              <div className="hcContentContainer">
                      <div className="hcTabs hcTabsHoriz hcBasicSideMargin">
                        <div className="hcTabLabels">
                          <div
                              className="hcTabLabel hcRoundedCornersTop"
                              id="tab-list-info">Info</div>
                          <div className="hcTabLabel" id="tab-list-dataset">Dataset</div>
                          <div className="hcTabLabel" id="tab-list-filter">Filter</div>
                          <div className="hcTabLabel" id="tab-list-sample">Sample</div>
                          <div
                            className="hcTabLabel"
                            id="tab-list-relation">Relation</div>
                        </div>
                        <div className="hcTabAllContent hcStickOutBoxAside hcRoundedCornersTop">
                          <div
                            className="hcTabContent hcMarginTop2 hcForm"
                            id="tab-content-info">
                            <h3>Name</h3>
                            <input
                              type="text"
                              name
                              defaultValue
                              className="hcMarginBottom2" />
                            <h3>Description</h3>
                            <textarea
                              name="name"
                              rows={4}
                              className="hcMarginBottom1" />
                            <button type="button" name="button">
                              Save project
                            </button>
            </div>
          </div>
        </div>
      </div>




            </ React.Fragment>


              );
            }
          }
