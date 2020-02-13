import React from 'react';
//const Fragment = React.Fragment;


  export class HcHeaderGoldenAgents extends React.Component {
    render() {
      return (
        <React.Fragment>



          <div className="hcGaHeader hcMarginBottom3 bgColorBrand1">
            <div className="hcGaHeaderLogo">
                <img
                src="https://d33wubrfki0l68.cloudfront.net/ed17091f189bc37f34f94717f506432501dbc722/d072a/images/logo-ga.png"
                alt="Golden Agents logo" />
            </div>
            <div className="hcGaHeaderToolName">
              {{toolName}}
            </div>
            <div className="hcGaHeaderProject">
              {{projectName}}
            </div>
          <div className="hcGaHeaderHelp" />
        </div>



        </React.Fragment>
        );
      }
    }
