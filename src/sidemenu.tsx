import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

// import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Download from 'material-ui/svg-icons/file/file-download';

export interface Props {
}

const styles = {
    drawer: {
    }
}

export default class SideMenu extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {open: true};
    }

    render() {
        return <div>
                    <Drawer 
                      open={this.state.open} 
                      docked={true} 
                      style={styles.drawer}
                      className={this.state.open?'expanded':''}
                    >
                      <MenuItem
                        primaryText="Menu Item"
                        leftIcon={<Download />} 
                        onTouchTap={this.toggle.bind(this)}
                      />
                      <MenuItem>Menu Item 2</MenuItem>
                      <IconButton />
                    </Drawer>
            </div>
    }

    toggle() {
        this.setState({open: !this.state.open})
    }
}
