import React from 'react';
//const Fragment = React.Fragment;


  export class HcLlSubNavigation extends React.Component {
    render() {
      return (
        <div className="hcContentContainer hcMarginBottom4">
          <div className="hcRowJustifyTop">
            <div className="hcBasicSideMargin">
              <h3>{this.props.pageTitle}</h3>
            </div>
            <div className="hcBasicSideMargin hcAlignRight hcGaTabsLoudness1">
              <a href="" className={ (this.props.isDs ? 'hcSelected' : '')} >Data Selection</a>
              <a href="" className={ (this.props.isAl ? 'hcSelected' : '')} >Alignment</a>
            </div>
          </div>
        </div>
        );
      }
    }



    export class HcModal extends React.Component {
      render() {
        return (
          <div class="hcModal">
            <div class="hcContentContainer">
              <div class="hcModelContentWrap">

                <div class="hcBasicSideMargin hc2columns hcMarginBottom2 hcMarginTop2">
                  <h3>{this.props.modalName}</h3>
                  <div class="hcTxtRight">Close</div>
                </div>

                {this.props.children}

              </div>
            </div>
          </div>
          );
        }
      }


      export class HcLlCompareItem extends React.Component {
        render() {
          return (
            <React.Fragment>
              <div>
                <div className="hcLabel">{this.props.label}</div>
                <div className="hcMarginBottom1 hcSmallTxt">{this.props.content}</div>
              </div>
            </ React.Fragment>
            );
          }
        }


        export class HcLlAlignmantInfoBar extends React.Component {
          render() {
            return (
              <div className="hcContentContainer hcMarginBottom3">
                <div className="hcRowJustify hcStickOutBox hcRoundedCorners">
                  <div className="hc4columns">
                    <div className="hcBasicSideMargin">
                      Sources: <strong>{this.props.infoSources}</strong>
                    </div>
                    <div className="hcBasicSideMargin">
                      Targets: <strong>{this.props.infoTargets}</strong>
                    </div>
                    <div className="hcBasicSideMargin">
                      Links <strong>{this.props.infoLinks}</strong>
                    </div>
                    <div className="hcBasicSideMargin">
                      Clusters: <strong>{this.props.infoClusters}</strong>
                    </div>
                  </div>
                  <div className="hcBasicSideMargin">
                    <button type="button" name="button">Reconcile</button>
                  </div>
                </div>
              </div>

              );
            }
          }
