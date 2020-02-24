import React from 'react';
import { HclLIconDataSelection, HclLIconAlignment } from './golden-agents';


  export class HcLlListItemMinimal extends React.Component {
    render() {
      return (
        <div>
          {this.props.title}
        </div>


        );
      }
    }


    export class HcLlListItemMinimal2Fields extends React.Component {
      render() {
        return (
          <div className="hcAlignVertical">
            <div>
              {this.props.field1}
              <div className="hcSmallTxt hcClrTxt_Grey">
                {this.props.field2}
              </div>
            </div>
          </div>


          );
        }
      }



    export class HcLlListLabel extends React.Component {
      render() {
        return (
          <div className="hcLabel">
            {this.props.title}
          </div>


          );
        }
      }





      export class HcLlListItemDataSelection extends React.Component {
        render() {
          return (
            <div className="hcListBasicResult">
              <div className="hcListItemLong">
                <strong><HclLIconDataSelection/> {this.props.title}</strong>
                <div className="hcSmallTxt">
                  {this.props.dataset}
                </div>
                <div className="hcSmallTxt">
                  {this.props.provider}
                </div>
              </div>
              <div><a href>Duplicate</a></div>
              <div><a href>Delete</a></div>
            </div>
            );
          }
        }



        export class HcLlListItemAlignment extends React.Component {
          render() {
            return (
              <div className="hcListBasicResult">
                <div className="hcListItemLong">
                  <strong> <HclLIconAlignment/>{this.props.prName}</strong>
                </div>
                <div className="hcSmallTxt hcTxtRight">
                  {this.props.prSource}
                </div>
                <div className="hcSmallTxt hcTxtRight">
                  {this.props.prSource}
                </div>
                <div className="hcSmallTxt hcTxtRight">
                  {this.props.prTarget}
                </div>
                <div className="hcSmallTxt hcTxtRight">
                  {this.props.prLinks}
                </div>
                <div className="hcSmallTxt hcTxtRight">
                  {this.props.prCusters}
                </div>
                <div className="hcSmallTxt hcTxtRight">
                  {this.props.prStatus}
                </div>
                <div><a href>Duplicate</a></div>
              </div>


              );
            }
          }


          export class HcLlListItemAlignmentLinks extends React.Component {
            render() {
              return (
                <div class="hcListBasicResult">
                    <div className>{this.props.strenght}</div>
                    <div className="hcListItemLong">
                      <div className="hcLabel"><HclLIconDataSelection/> {this.props.s1}</div>
                      <strong>{this.props.s2}</strong>
                      <div className="hcSmallTxt hcClrTxt_Grey hcTextTruncate">{this.props.s3}</div>
                    </div>
                    <div className="hcListItemLong">
                      <div className="hcLabel"><HclLIconDataSelection/> {this.props.t1}</div>
                      <strong>{this.props.t2}</strong>
                      <div className="hcSmallTxt hcClrTxt_Grey hcTextTruncate">{this.props.t3}</div>
                    </div>
                    <div className="hcListItemLong">
                      <button type="button" name="button">Compare</button>
                      <button type="button" name="button">Accept</button>
                      <button type="button" name="button">Decline</button>
                    </div>
              </div>
                );
              }
            }



            export class HcLlListItemAlignmentClusters extends React.Component {
              render() {
                return (
                  <div className="hcListBasicResult">
                    <div className="hcSmallTxt">391</div>
                    <div className="hcSmallTxt">73.642</div>
                    <div className="hcListItemLong">
                      <div className="hcLabel"><HclLIconDataSelection/> foaf_name</div>
                      <strong>Mary Jans</strong>
                    </div>
                    <div className="hcListItemLong">
                      <div className="hcLabel"><HclLIconDataSelection/> Schema_Name</div>
                      <strong>Brugge-Antwerpen</strong>
                    </div>
                    <div className="hcSmallTxt hcTxtCenter"> x </div>
                    <div className="hcSmallTxt hcTxtCenter"> x </div>
                    <div className="hcSmallTxt"> 2345234542 </div>
                  </div>

                  );
                }
              }



              export class HcLlListItemAlignmentClusterViewItem extends React.Component {
                render() {
                  return (
                    <div>
                      <div>
                        <div>{this.props.field1}</div>
                        <strong>{this.props.field2}</strong>
                        <div className="hcSmallTxt hcClrTxt_Grey">{this.props.field3}</div>
                      </div>
                    </div>

                    );
                  }
                }





        export class HcResultListPaging extends React.Component {
          render() {
            return (
              <div className="hcPagination">
                <div><a href="#">← Previous</a></div>
                <div><a href="#">1</a></div>
                <div class="bgColorBrand2"><a href="#">2</a></div>
                <div><a href="#">3</a></div>
                <div><a href="#">4</a></div>
                <div><a href="#">5</a></div>
                <div><a href="#">6</a></div>
                <div><a href="#">Next →</a></div>
              </div>
            );
          }
        }
