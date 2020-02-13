import React from 'react';
//const Fragment = React.Fragment;


  export class HcHeaderTimbuctoo extends React.Component {
    render() {
      return (
        <React.Fragment>
        <div className="hcContentContainer bgColorBrand1 hcMarginBottom1">
          <header className="hcPageHeaderSimple hcBasicSideMargin">
            {/* eslint-disable-next-line */}
            <a href="#" className="hcBrand">
              <div className="hcBrandLogo">
                <img src="https://d33wubrfki0l68.cloudfront.net/f268c733451856e103a2959ba15ffdaec6334ea4/d34d8/images/emlo-logo.png" class="logo" alt="EM Places"/>
              </div>
            </a>

            <nav>
              {/* eslint-disable-next-line */}
              <a href="#">All datasets</a>
              {/* eslint-disable-next-line */}
              <a href="#">About</a>
            </nav>
          </header>
        </div>
        <div className="hcContentContainer hcMarginBottom5 hcBorderBottom">
          <div className="hcBarDataset hcBasicSideMargin">
            <span>
              <span className="hcSmallTxt hcTxtColorGreyMid">Dataset</span>
              <select  >
                  <option >**List all datasets**</option>
              </select>

            </span>
            <span>
              <span className="hcSmallTxt hcTxtColorGreyMid"> Collections</span>
              <select  >
                  <option >**List all Properties of selected datasets**</option>
              </select>
            </span>

          </div>
        </div>
      </React.Fragment>
      );
    }
  }

  export class HcFooterTimbuctoo extends React.Component {

    render() {
      return (
        <div className="hcContentContainer bgColorBrand1">
          <div className="hcMarginTop5 hcMarginBottom5 hc2columns">
            <div className="hcBasicSideMargin">
              <strong>Powered by Timbuctoo.</strong><br/>
              Timbuctoo lets you fully exploit your Arts and Humanities data.
          It features powerful tools for data management and analysis, and allows you to connect your data with other datasets. <a href="https://timbuctoo.huygens.knaw.nl/">Learn more about Timbuctoo.</a>

            </div>
            <div className="hcBasicSideMargin">
              <img
                style={{
          				fontSize: '1em',
                  width: '300px',
                  height: 'auto',
          			}}
                src="https://d33wubrfki0l68.cloudfront.net/e9bf56438b50ed9f97250de6d7c33b3bb8879741/c0f8e/images/logo-tim-hi-huc.png"
                alt="Timbuctoo Logo's"
                class="hcMarginTop2" />
            </div>
          </div>
        </div>
      );
    }
  }
