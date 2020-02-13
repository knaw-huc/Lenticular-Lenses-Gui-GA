import React from 'react';
import logoGa from './images/logo-ga.png';
//const Fragment = React.Fragment;


  export class HcHeaderGoldenAgents extends React.Component {
    render() {
      return (
        <div className="hcGaHeader hcMarginBottom3 bgColorBrand1">
          <div className="hcGaHeaderLogo">
              <img
              src={logoGa}
              alt="Golden Agents logo" />
          </div>
          <div className="hcGaHeaderToolName">
              {this.props.toolName}
          </div>
          <div className="hcGaHeaderProject">
            {this.props.projectName}
          </div>
        <div className="hcGaHeaderHelp" />
      </div>

        );
      }
    }



    export class HclLIconDataSelection extends React.Component {
      render() {
        return (
            <div className="hc-ga-icon hc-ga-icon-ds hcRoundedCorners"> </div>

          );
        }
      }


      export class HclLIconAlignment extends React.Component {
        render() {
          return (
              <div className="hc-ga-icon hc-ga-icon-al hcRoundedCorners"> </div>

            );
          }
        }
