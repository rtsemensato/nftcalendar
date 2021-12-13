import React, { useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { PageContainer } from "../components/PageContainer";
import { Loading } from "../components/Loading";

import { LoginContextProvider } from "../contexts/LoginContext";

import "../styles/reset.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(false);

	//Binding events.
	Router.events.on("routeChangeStart", () => {
		setIsLoading(true);
		NProgress.start();
	});

	Router.events.on("routeChangeComplete", () => {
		setIsLoading(false);
		NProgress.done();
	});

	Router.events.on("routeChangeError", () => {
		setIsLoading(false);
		NProgress.done();
	});

	return (
		<LoginContextProvider>
			<PageContainer>
					{isLoading ? (
						<Loading />
					) : (
							<Component {...pageProps} />
					)}
			</PageContainer>
		</LoginContextProvider>
	);
}

export default MyApp;
