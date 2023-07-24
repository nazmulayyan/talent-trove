const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-xl font-bold mb-4 menu">About Us</h4>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae risus nec odio auctor laoreet.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 menu">Contact</h4>
              <p className="description">Email: contact@yourwebsite.com</p>
              <p className="description">Phone: +1 (123) 456-7890</p>
              <p className="description">Address: 123 Main Street, City, Country</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 menu">Quick Links</h4>
              <ul className="description">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-t border-gray-600" />
          <p className="text-center text-sm description">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  