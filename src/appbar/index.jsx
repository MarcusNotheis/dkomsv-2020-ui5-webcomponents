import React from "react";
import profile from "./profile.png";
import logo from "./logo.png";

import "@ui5/webcomponents-fiori/dist/ShellBar";

const AppBar = () => {
	return (
		<div className="app-bar">
			<ui5-shellbar
				logo={logo}
				profile={profile}
				primary-title="Smart Store Manager"
				show-notifications
				show-product-switch
				show-co-pilot>
			</ui5-shellbar>
		</div>
	)
}

export default AppBar;