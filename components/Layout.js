import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="main">
            {children}
			<Footer />
		</div>
	);
};

export default Layout;
