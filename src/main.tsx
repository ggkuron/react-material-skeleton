import * as React from 'react';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Table from './table'

export interface Props {
    content: string;
}

injectTapEventPlugin();

export default class MyApp extends React.Component<Props, {}> {
    render() {
        return <div>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                  <AppBar title="" />
                  <Tabs>
                    <Tab label="一覧">
                      <Table content="" />
                    </Tab>
                    <Tab label="登録">
                      <div>
                        <TextField 
                           defaultValue={this.props.content}
                           floatingLabelText="hoge"
                        />
                      </div>
                    </Tab>
                  </Tabs>
                </div>
            </MuiThemeProvider>
            </div>
    }
}
