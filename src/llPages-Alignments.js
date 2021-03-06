import React from 'react';
import {HcLlListItemMinimal, HcLlListItemMinimal2Fields, HcLlListLabel, HcLlListItemDataSelection, HcLlListItemAlignment, HcResultListPaging,HcLlListItemAlignmentLinks, HcLlListItemAlignmentClusters,HcLlListItemAlignmentClusterViewItem} from './llListItems';
import {HcLlSubNavigation, HcLlCompareItem, HcLlAlignmantInfoBar} from './llUtils';
import {HclLIconDataSelection, HclLIconAlignment} from './golden-agents';
import tempImg from './images/ga-ll-tempNetwork.svg';


  export class HcLlLayoutAlignmentOverview extends React.Component {
    render() {
      return (
        <React.Fragment>

          <HcLlSubNavigation pageTitle={this.props.pageData.pageTitle} isDs={this.props.pageData.pageNavDs} isAl={this.props.pageData.pageNavAl} />

          <div className="hcContentContainer hcMarginBottom2">
            <div className="hcRowJustify">
              <div className="hcBasicSideMargin">
                {this.props.pageData.introductionText}
              </div>
              <div className="hcBasicSideMargin">
                <button type="button" name="button">
                  New aligment
                </button>
              </div>
            </div>
          </div>

          <div className="hcContentContainer hcMarginBottom5">

            <div className="hcList hcMarginBottom1 hcBasicSideMargin">
              <div className="hcListHeader">

                <div className="hcLabel hcListItemLong">Name</div>
                <div className="hcLabel hcTxtRight">Source</div>
                <div className="hcLabel hcTxtRight">Targets</div>
                <div className="hcLabel hcTxtRight">Links</div>
                <div className="hcLabel hcTxtRight">Clusters</div>
                <div className="hcLabel">Status</div>

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






  export class HcLlAlignmentDetail extends React.Component {
    render() {
      return (<React.Fragment>
        <HcLlSubNavigation pageTitle={this.props.pageData.pageTitle} isDs={this.props.pageData.pageNavDs} isAl={this.props.pageData.pageNavAl} />

        <HcLlAlignmantInfoBar
          infoLinks={this.props.pageData.infoLinks}
          infoClusters={this.props.pageData.infoClusters}
          infoSources={this.props.pageData.infoSources}
          infoTargets={this.props.pageData.infoTargets}
          />

        <div className="hcContentContainer hcMarginBottom5">
          <div className="hcTabs hcTabsHoriz hcBasicSideMargin">
            <div className="hcTabLabels">
              <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-info-a">Info</div>
              <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-matching-settings">Matching settings</div>
              <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-links">Links</div>
              <div className="hcTabLabel hcRoundedCornersTop" id="tab-list-clusters">Clusters</div>
            </div>
            <div className="hcTabAllContent hcStickOutBoxAside hcRoundedCornersTop">

              {/* tab: info */}
              <div className="hcTabContent hcMarginTop2 hcForm" id="tab-content-info-a">
                <h3>Name</h3>
                <input type="text" name="name" defaultValue="defaultValue" className="hcMarginBottom2"/>
                <h3>Description</h3>
                <textarea name="name" rows={4} className="hcMarginBottom1"/>
                <button type="button" name="button">
                  Save project
                </button>
              </div>

              {/* tab: matching-settings */}
              <div className="hcTabContent hcMarginTop2" id="tab-content-matching-settings">
              <h3>Sources</h3>
              <div className="hcList hcMarginBottom1">
                {this.props.pageData.matchSetSrc.map(item => (<div className="hcRowJustify"> <div><HclLIconDataSelection/> {item}</div><div className="hcTxtRight"><a href="">Delete</a></div> </div>))}
              </div>
              <button type="button" className="hcMarginBottom2" >Add source</button>

              <h3>Targets</h3>
              <div className="hcList hcMarginBottom1">
                {this.props.pageData.matchSetTrg.map(item => (<div className="hcRowJustify"> <div><HclLIconDataSelection/> {item}</div><div className="hcTxtRight"><a href="">Delete</a></div> </div>))}
              </div>
              <button type="button" className="hcMarginBottom2">Add target</button>


                </div>

                {/* tab: Links */}
                <div className="hcTabContent hcMarginTop2 hcForm" id="tab-content-links">
                  <div className="hcList hcMarginBottom1">
                    <div className="hcListHeader">
                      <div className="hcLabel">Strenght</div>
                      <div className="hcLabel hcListItemLong">Source</div>
                      <div className="hcLabel hcListItemLong">Targets</div>
                      <div className="hcLabel hcListItemLong"></div>
                    </div>
                  </div>

                  <div className="hcList hcMarginBottom1">
                    {this.props.pageData.links.map(item => (<HcLlListItemAlignmentLinks strenght={item.strenght} s1={item.sEntity} s2={item.sName} s3={item.sUri} t1={item.tEntity} t2={item.tName} t3={item.tUri} />))}
                  </div>
                </div>

                {/* tab: Clusters */}
                <div className="hcTabContent hcMarginTop2" id="tab-content-clusters">
                  <div class="hcList hcMarginBottom1">
                    <div className="hcListHeader">
                      <div className="hcLabel">Size</div>
                      <div className="hcLabel">Links</div>
                      <div className="hcLabel hcListItemLong" ></div>
                      <div className="hcLabel hcListItemLong" ></div>
                      <div className="hcLabel hcTxtCenter">Extened</div>
                      <div className="hcLabel hcTxtCenter">Reconciled</div>
                      <div className="hcLabel ">ID</div>
                    </div>
                  </div>

                  <div className="hcList hcListDisctinctLines hcMarginBottom2" >
                    {this.props.pageData.clusters.map(item => (<HcLlListItemAlignmentClusters size={item.size} links={item.links} s1={item.sEntity} s2={item.sName} t1={item.tEntity} t2={item.tName} ext={item.ext} reconc={item.reconc} id={item.id} />))}
                  </div>



                </div>
              </div>
            </div>
          </div>
        </ React.Fragment>
        );
      }
    }


    export class HcLlAlignmentsLinkCompare extends React.Component {
      render() {
        return (
        <React.Fragment>

          <div className="hcContentContainer hcMarginBottom1 hcMarginTop1">
            <div className="hcBasicSideMargin hcAlignRight">
              <a href=""><button>View settings</button></a>
              <a href="">Close</a>
            </div>
          </div>

          <div className="hcContentContainer hcMarginBottom5">
            <div className="hcLayoutCols122 hcVerticalLineSeperator">
              <div className="hcBasicSideMargin">
                <h3>Link</h3>
                <div className="hcLabel">nr</div>
                <div className="hcMarginBottom1">{this.props.pageData.nr}</div>
                <div className="hcLabel">Strenght</div>
                <div>{this.props.pageData.strenght}</div>
              </div>

              <div className="hcBasicSideMargin">
                <h3>Source</h3>
                <div className="hcMarginBottom1 hcSmallTxt"><a href={this.props.pageData.sUri}>{this.props.pageData.sUri}</a></div>
                    {this.props.pageData.sourceItems.map(item => (<HcLlCompareItem label={item.label} content={item.content} />))}
              </div>
              <div className="hcBasicSideMargin">
                <h3>Target</h3>
                <div className="hcMarginBottom1 hcSmallTxt"><a href={this.props.pageData.tUri}>{this.props.pageData.tUri}</a></div>
                {this.props.pageData.TargetItems.map(item => (<HcLlCompareItem label={item.label} content={item.content} />))}
              </div>
            </div>
          </div>

          <div className="hcStickyFooter hcStickyFooterLook hcContentContainer">
            <div className="hc3columns hcBasicSideMargin">

              <div className="hcTxtLeft"><button>Previous</button></div>
              <div className="hcTxtCenter"><button className="bgColorBrand2">Accept</button><button className="hcClrBg_Error">Decline</button></div>
              <div className="hcTxtRight"><button>Next</button></div>
            </div>
          </div>
        </ React.Fragment>

      );
      }
    }



    export class HcLlAlignmentsClusterView extends React.Component {
      render() {
        return (
        <React.Fragment>
          <div className="hcContentContainer hcMarginBottom1 hcMarginTop1">
            <div className="hcBasicSideMargin hcAlignRight">
              <a href=""><button>View settings</button></a>
              <a href="">Close</a>
            </div>
          </div>


          <div className="hcLayoutCols112">
            <div className="hcBasicSideMargin">
              <div className="hcLabel">Source</div>
              <div className="hcList hcListDisctinctLines">
                {this.props.pageData.targetList.map(item => (<HcLlListItemAlignmentClusterViewItem field1={item.field1} field2={item.field2} field3={item.field3} />))}
              </div>
            </div>




            <div className="hcBasicSideMargin">
              <div className="hcBasicSideMargin">
                <div className="hcLabel">Target</div>
                <div className="hcList hcListDisctinctLines">
                  {this.props.pageData.sourceList.map(item => (<HcLlListItemAlignmentClusterViewItem field1={item.field1} field2={item.field2} field3={item.field3} />))}
                </div>
              </div>
            </div>



        <div className="hcBasicSideMargin">
          <img src={tempImg} className="tempImg" />
        </div>

      </div>

    </ React.Fragment>

      );
      }
    }
