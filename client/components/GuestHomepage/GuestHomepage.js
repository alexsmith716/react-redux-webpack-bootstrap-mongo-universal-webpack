import React from 'react';
//import PortfolioBox from '../PortfolioBox/PortfolioBox';
//import ServiceBox from '../ServiceBox/ServiceBox';
//import styles from './GuestHomepage.scss';

const GuestHomepage = () => {
  const styles = require('./GuestHomepage.scss');

  return (
    <div>
      <main role="main">

        <header className={styles.masthead}>
          <div className={styles.introBody}>
            <div className={styles.container}>
              <h1 className={styles.introHeading}>Election App 2018</h1>                
              <h2>The 2016 presidential election is here!</h2>                
              <p className={styles.introText}><b>Who do you support and what are your comments? Join the conversation.</b></p>               
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Sign Up Now »</a></p>
            </div>
          </div>
        </header>

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

          <h2>Portfolio Heading</h2>

          <div className="row">
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="" alt=""/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project One</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="" alt=""/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Two</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="" alt=""/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Three</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h2>Modern Business Features</h2>
              <p>The Modern Business template by Start Bootstrap includes:</p>
              <ul>
                <li>
                  <strong>Bootstrap v4</strong>
                </li>
                <li>jQuery</li>
                <li>Font Awesome</li>
                <li>Working contact form with validation</li>
                <li>Unstyled page elements for easy customization</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid rounded" src="http://placehold.it/700x450" alt=""/>
            </div>
          </div>

          <hr/>

          <div className="row mb-4">
            <div className="col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
            </div>
            <div className="col-md-4">
              <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default GuestHomepage;
