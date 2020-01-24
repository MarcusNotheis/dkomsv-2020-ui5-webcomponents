import React, { useEffect } from 'react';

import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/StandardListItem';
import '@ui5/webcomponents/dist/Timeline';
import '@ui5/webcomponents/dist/TimelineItem';
import '@ui5/webcomponents/dist/Table';
import '@ui5/webcomponents/dist/TableColumn';
import '@ui5/webcomponents/dist/TableRow';
import '@ui5/webcomponents/dist/TableCell';

import '@ui5/webcomponents-icons/dist/icons/product';
import '@ui5/webcomponents-icons/dist/icons/web-cam';
import '@ui5/webcomponents-icons/dist/icons/hide';
import '@ui5/webcomponents-icons/dist/icons/calendar';
import '@ui5/webcomponents-icons/dist/icons/phone';
import '@ui5/webcomponents-icons/dist/icons/fridge';
import '@ui5/webcomponents-icons/dist/icons/lightbulb';
import '@ui5/webcomponents-icons/dist/icons/heating-cooling';
import '@ui5/webcomponents-icons/dist/icons/washing-machine';
import '@ui5/webcomponents-icons/dist/icons/temperature';
import '@ui5/webcomponents-icons/dist/icons/retail-store';

import data from './data.json';
import './styles.css';
import managerImg from '../appbar/profile.png';

/* TODO: FIX THIS */

import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';

addCustomCSS(
  'ui5-card',
  `
    :host .ui5-card-avatar {
      display: none;
    }
  `
);
/* --------------- */

const Home = (props) => {
  const storesListRef = React.createRef();

  useEffect(() => {
    storesListRef.current.addEventListener('itemPress', (event) => {
      props.history.push(`/stores/${event.detail.item.getAttribute('data-store-id')}`);
    });
  }, []);

  return (
    <div className="app-content">
      {/* Featured */}
      <ui5-title level="H3">Featured</ui5-title>
      <section className="section">
        {data.featured.map((dataObj, index) => (
          <ui5-card
            key={dataObj.key}
            heading={dataObj.heading}
            subtitle={dataObj.subtitle}
            status={dataObj.status}
            header-interactive
            class="ui5card"
          >
            <ui5-list separators="Inner">
              {dataObj.items.map((item) => (
                <ui5-li
                  key={item.key}
                  icon={item.icon}
                  description={item.description}
                  info={item.info}
                  info-state={item.infoState}
                  class="ui5list-item"
                >
                  {item.title}
                </ui5-li>
              ))}
            </ui5-list>
          </ui5-card>
        ))}
      </section>

      {/* Today */}
      <ui5-title level="H3">Today at a glance</ui5-title>
      <section className="section">
        <ui5-card heading="Upcoming Activities" subtitle="28 Jun 2019" class="ui5card">
          <ui5-timeline>
            {data.activities.map((item) => (
              <ui5-timeline-item
                key={item.key}
                icon={item.icon}
                title-text={item.title}
                subtitle-text={item.subtitle}
                class="ui5list-item"
              >
                <div>{item.location}</div>
              </ui5-timeline-item>
            ))}
          </ui5-timeline>
        </ui5-card>

        <ui5-card heading="Energy Efficiency" subtitle="Smart Store A" class="ui5card">
          <ui5-list separators="Inner">
            {data.energystats.map((item) => (
              <ui5-li
                key={item.key}
                icon={item.icon}
                description={item.description}
                info={item.info}
                class="ui5list-item"
              >
                {item.title}
              </ui5-li>
            ))}
          </ui5-list>
        </ui5-card>

        <ui5-card
          avatar="sap-icon://retail-store"
          heading="Smart Stores"
          subtitle="Bulgaria"
          status="6 of 6"
          class="ui5card ui5card-large"
        >
          <div className="card-content">
            <ui5-list separators="Inner" class="card-content-child" ref={storesListRef}>
              {data.storesa.map((store, index) => (
                <ui5-li data-store-id={index} key={store.key} image={managerImg} description={store.description}>
                  {store.title}
                </ui5-li>
              ))}
            </ui5-list>
            <ui5-list separators="Inner" class="card-content-child">
              {data.storesb.map((store) => (
                <ui5-li key={store.key} image={managerImg} description={store.description}>
                  {store.title}
                </ui5-li>
              ))}
            </ui5-list>
          </div>
        </ui5-card>
      </section>

      {/* Actions Required */}
      <ui5-title level="H3">Action Required</ui5-title>
      <section className="section">
        {data.actions.map((action) => (
          <ui5-card
            key={action.key}
            heading="Smart Store 1"
            subtitle="today"
            status="3 of 6"
            class="ui5card ui5card-large"
          >
            <ui5-table>
              {action.columns.map((column) => (
                <ui5-table-column key={column.key} slot="columns">
                  <div>
                    <ui5-label>{column.name}</ui5-label>
                  </div>
                </ui5-table-column>
              ))}
              {action.rows.map((dataObj) => (
                <ui5-table-row key={dataObj.key}>
                  {dataObj.cells.map((cell) => (
                    <ui5-table-cell key={cell.key}>
                      <ui5-label class={cell.error}>{cell.text}</ui5-label>
                    </ui5-table-cell>
                  ))}
                </ui5-table-row>
              ))}
            </ui5-table>
          </ui5-card>
        ))}

        {/* Alerts */}
        {data.alerts.map((alert) => {
          return (
            <ui5-card key={alert.key} heading={alert.heading} subtitle={alert.subtitle} class="ui5card ui5card-alert">
              <div className="ui5card-alert-content">
                <ui5-icon src={alert.icon} class="ui5icon-size ui5card-alert-icon"></ui5-icon>
                <ui5-label class="ui5label-size error">{alert.text}</ui5-label>
              </div>
            </ui5-card>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
