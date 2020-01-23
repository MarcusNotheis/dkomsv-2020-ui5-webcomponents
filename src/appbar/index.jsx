import React, { useEffect } from "react";

import profile from "./profile.png";
import logo from "./logo.png";

// imports CSS from the main package
import "@ui5/webcomponents/dist/json-imports/Themes"

// imports CSS from the fiori package
import "@ui5/webcomponents-fiori/dist/json-imports/Themes"

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";

import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/Option";
import "@ui5/webcomponents/dist/Switch";
import "@ui5/webcomponents-icons/dist/icons/settings";
import "@ui5/webcomponents-icons/dist/icons/sys-help";
import "@ui5/webcomponents-icons/dist/icons/log";
import "@ui5/webcomponents-icons/dist/icons/palette";
import "@ui5/webcomponents-icons/dist/icons/desktop-mobile";


const AppBar = () => {
	const shellbarRef = React.createRef();
	const popoverRef = React.createRef();
	const selectRef = React.createRef();
	const compactSwitchRef = React.createRef();

	useEffect(() => {
		shellbarRef.current.addEventListener("profileClick", (event) => {
			popoverRef.current.openBy(event.detail.targetRef);
		});

		selectRef.current.addEventListener("change", event => {
			const themeId = event.detail.selectedOption.getAttribute("data-theme-id");

			setTheme(themeId);
		});

		compactSwitchRef.current.addEventListener("change", event => {
			document.body.classList.toggle("ui5-content-density-compact", !!event.target.checked);
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
								<ui5-switch ref={compactSwitchRef}></ui5-switch>
							</div>
						</ui5-li-custom>

						<ui5-li-custom type="Inactive">
							<div className="profile-hcb-switch centered">
								<ui5-li icon="palette" type="Inactive">Theme</ui5-li>
								<ui5-select ref={selectRef}>
									<ui5-option data-theme-id="sap_fiori_3">Fiori 3</ui5-option>
									<ui5-option data-theme-id="sap_fiori_3_dark">Fiori 3 Dark</ui5-option>
									<ui5-option data-theme-id="sap_belize_hcb">Belize HCB</ui5-option>
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