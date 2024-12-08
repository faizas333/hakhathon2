export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Stay up to date about our latest offers
          </h3>
          <form className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-md text-black w-1/3"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">SHOP.CO</h4>
            <p className="text-sm text-gray-400">
              We have clothes that suit your style and which youre proud to
              wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Help</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Delivery Details</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">FAQ</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Manage Deliveries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Payments</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Free Ebooks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Development Tutorial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">How-to Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; Shop.Co 2000-2024. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}