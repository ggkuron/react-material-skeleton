import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Table from './table';
import SideMenu from './sidemenu';

injectTapEventPlugin();

export interface Props {
}

const styles = {
    tabs: {
        marginTop: 50
    }
}

export default class MyApp extends React.Component<Props, {}> {
    render() {
        return <div>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                  <AppBar title="" />
                  <SideMenu />
                  <Tabs style={styles.tabs}>
                    <Tab label="list">
                      <Table />
                    </Tab>
                    <Tab label="entry">
                      <div>
                        <TextField 
                           floatingLabelText="foo"
                        />
                      </div>
                    </Tab>
                  </Tabs>
                </div>
            </MuiThemeProvider>
            </div>
    }
}
