import React from 'react'

export default class DemoApp extends React.Component {
    constructor(props) {
        super(props);
    }


    showMenu() {
       console.log("failure");
    };

    hideMenu() {
       console.log("sucess");
    };

    renderOverlay () {
        const styles = {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: "999"
        };

        return (<div onClick={this.hideMenu} style={styles} />);
    };

    render() {
        return (
            <div style={{ position: "relative" }}>
                {this.renderOverlay() }
                <span className="input-group-addon" onClick={this.showMenu} />
            </div>
        );
    }

}
