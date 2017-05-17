define(["antd"], function (_antd) {
    "use strict";

    ReactDOM.render(React.createElement(
        "div",
        null,
        React.createElement(
            _antd.Button,
            { type: "primary" },
            "Primary"
        ),
        React.createElement(
            _antd.Button,
            null,
            "Default"
        ),
        React.createElement(
            _antd.Button,
            { type: "ghost" },
            "Ghost"
        ),
        React.createElement(
            _antd.Button,
            { type: "dashed" },
            "Dashed"
        )
    ), mountNode);
});
