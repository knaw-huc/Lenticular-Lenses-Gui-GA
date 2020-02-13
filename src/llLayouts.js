import React from 'react';
import { HcLlListItemMinimal } from './llListItems';
import { HcLlSubNavigation } from './llListUtils';
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


      export class HcLlLayoutTabs extends React.Component {
        render() {
          return (
            <HcLlSubNavigation/>

            );
          }
        }
