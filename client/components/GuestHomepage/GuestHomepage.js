import React from 'react';
//import PortfolioBox from '../PortfolioBox/PortfolioBox';
//import ServiceBox from '../ServiceBox/ServiceBox';
//import styles from './GuestHomepage.scss';

const GuestHomepage = () => {
  const styles = require('./GuestHomepage.scss');

  return (
    <div>
      <main role="main">

        <div className="container">

          <h1 className="my-4">Welcome to Modern Business</h1>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title</h4>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title</h4>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title</h4>
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default GuestHomepage;
