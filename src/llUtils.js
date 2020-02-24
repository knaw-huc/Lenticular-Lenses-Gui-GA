import React from 'react';
//const Fragment = React.Fragment;


  export class HcLlSubNavigation extends React.Component {
    render() {
      return (
        <div className="hcContentContainer hcMarginBottom4">
          <div className="hcBasicSideMargin hcAlignRight hcGaTabsLoudness1">
            <a href="" className="hcSelected">Data Selection</a>
            <a href="">Alignment</a>
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
