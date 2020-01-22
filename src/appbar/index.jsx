import React, { useEffect } from "react";

import profile from "./profile.png";
import logo from "./logo.png";

import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/Option";
import "@ui5/webcomponents-icons/dist/icons/settings";
import "@ui5/webcomponents-icons/dist/icons/sys-help";
import "@ui5/webcomponents-icons/dist/icons/log";
import "@ui5/webcomponents-icons/dist/icons/palette";
import "@ui5/webcomponents-icons/dist/icons/desktop-mobile";


const AppBar = () => {
	const shellbarRef = React.createRef();
	const popoverRef = React.createRef();

	useEffect(() => {
		shellbarRef.current.addEventListener("profileClick", (event) => {
			popoverRef.current.openBy(event.detail.targetRef);
		});
	}, []);

	return (
		<div className="app-bar">
			<ui5-shellbar
				ref={shellbarRef}
				logo={logo}
				profile={profile}
				primary-title="Smart Store Manager"
				show-notifications
				show-product-switch
				show-co-pilot>
			</ui5-shellbar>

			<ui5-popover id="profile-popover" hide-header placement-type="Bottom" ref={popoverRef} horizontal-align="Right">
				<div className="profile-header centered">
					<img alt="" className="profile-img" src={profile}/>
					<ui5-title level="3">Darius Cummings</ui5-title>
					<ui5-label>Store Manager</ui5-label>
				</div>

				<div className="profile-content">
					<ui5-list separators="None">
						<ui5-li-custom type="Inactive">
							<div className="profile-hcb-switch centered">
								<ui5-li icon="desktop-mobile" type="Inactive">Compact Size</ui5-li>
								<ui5-switch></ui5-switch>
							</div>
						</ui5-li-custom>

						<ui5-li-custom type="Inactive">
							<div className="profile-hcb-switch centered">
								<ui5-li icon="palette" type="Inactive">Theme</ui5-li>
								<ui5-select>
									<ui5-option>Fiori 3</ui5-option>
									<ui5-option>Fiori 3 Dark</ui5-option>
									<ui5-option>Belize</ui5-option>
									<ui5-option>HCB</ui5-option>
								</ui5-select>
							</div>
						</ui5-li-custom>

						<ui5-li icon="sap-icon://settings">Settings</ui5-li>
						<ui5-li icon="sap-icon://sys-help">Help</ui5-li>
						<ui5-li icon="sap-icon://log">Sign out</ui5-li>
					</ui5-list>
				</div>
			</ui5-popover>
		</div>
	)
}

export default AppBar;