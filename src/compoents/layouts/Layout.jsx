// @ts-nocheck
import { Header } from "src/compoents/layouts/header/Header";
import { Footer } from "src/compoents/layouts/footer/Footer";

export const Layout = ({ children, ...props }) => {
    return (
			<>
				<Header />
					<main {...props}>
						<div>
							{ children }
						</div>
					</main>
				<Footer />
			</>
	);
}
