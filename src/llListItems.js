import React from 'react';
import { HclLIconDataSelection } from './golden-agents';


  export class HcLlListItemMinimal extends React.Component {
    render() {
      return (
        <div>
          {this.props.title}
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




        export class HcResultListPaging extends React.Component {
          render() {
            return (
              <div class="hcPagination">
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
