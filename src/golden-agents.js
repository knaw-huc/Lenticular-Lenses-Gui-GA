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
